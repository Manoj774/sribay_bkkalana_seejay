<?php

namespace App\Http\Controllers;

use App\Models\GenerateLinkClick;
use App\Models\MemberEarnHistory;
use App\Models\Product;
use App\Models\ProductHasCategory;
use App\Models\ProductImage;
use App\Models\UserHasMemberShip;
use Carbon\Carbon;
use Hashids\Hashids;
use Illuminate\Http\Request;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Jenssegers\Agent\Agent;
use SebastianBergmann\Environment\Console;

class ProductController extends Controller
{


    /**
     * Display a listing of the product.
     *
     * @return Response json
     */

    public function index()
    {
        $products = DB::table('products')
            ->select('products.id', 'products.product_name', 'products.sell_price', 'product_images.image_url')
            ->join('product_images', 'products.id', '=', 'product_images.product_id')
            ->groupBy('products.id')
            ->get();
        if (!$products) {
            return response()->json(['message' => 'Products not found'], 404);
        }
        return response()->json(['products' => $products], 200);
    }

    public function getFeaturesProduct(){

        $parentCategories = DB::table('categories')
            ->select('categories.id', 'categories.name')
            ->where('parent_id','=',0)
            ->get();

        $products = array();

        foreach ($parentCategories as $category){
            $items = DB::table('products')
                ->select('products.id', 'products.product_name', 'products.sell_price', 'product_images.image_url')
                ->join('product_images', 'products.id', '=', 'product_images.product_id')
                ->join('product_has_categories', 'products.id', '=', 'product_has_categories.product_id')
                ->where('product_has_categories.category_id', '=', $category->id)
                ->groupBy('products.id')
                ->get();

            if (count($items) > 0){
                $products[$category->name] = $items;
            }
        }

        return response()->json(['products' => $products], 200);

    }

    /**
     * Display a listing of the product by category.
     *
     * @param $id
     * @return Response json
     */

    public function productsByCategory($id)
    {
        $products = DB::table('products')
            ->select('products.id', 'products.product_name', 'products.sell_price', 'product_images.image_url')
            ->join('product_images', 'products.id', '=', 'product_images.product_id')
            ->join('product_has_categories', 'products.id', '=', 'product_has_categories.product_id')
            ->where('product_has_categories.category_id', '=', $id)
            ->groupBy('products.id')
            ->get();
        if (!$products) {
            return response()->json(['message' => 'Products not found'], 404);
        }
        return response()->json(['products' => $products], 200);
    }

    /**
     * Display a specific product by id.
     *
     * @param $id
     * @param int $user
     * @return Response json
     */

    public function show($id, $user = 0)
    {

        $userId = $user;
        $productId = $id;

        if ($user != 0) {
            $h = new Hashids('', 5);
            $userId = $h->decode($user)[0];
            $productId = $h->decode($id)[0];

            $agent = new Agent();

            $device = "Other";
            if ($agent->isMobile()) {
                $device = "Mobile";
            }

            if ($agent->isTablet()) {
                $device = "Tablet";
            }

            if ($agent->isDesktop()) {
                $device = "Desktop";
            }

            $generateLinkClicks = new GenerateLinkClick([
                'user_id' => $userId,
                'click_link' => \request()->url(),
                'user_agent' => $device,
                'ip_address' => \request()->ip()
            ]);

            if ($generateLinkClicks->save()) {
                $generateLinkClick = DB::table('generate_link_clicks')
                    ->where('user_id','=',$userId)
                    ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                    ->groupBy('ip_address')
                    ->get();
                if (count($generateLinkClick) >= 35) {
                    $userMembership = DB::table('user_has_member_ships')
                        ->select( 'user_has_member_ships.id AS userHasMemberShipId', 'weekly_income')
                        ->join('membership_plans', 'user_has_member_ships.membership_id', '=', 'membership_plans.id')
                        ->where('user_id','=',$userId)
                        ->first();
                    if (!$userMembership){
                        $memberEarnHistory = DB::table('member_earn_histories')
                            ->where('user_id','=',$userId)
                            ->where('description','=','Weekly Reward')
                            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                            ->first();
                        if (!$memberEarnHistory){
                            $memberEarn = new MemberEarnHistory([
                                'user_id' => $userId,
                                'earn_amount' => $userMembership->weekly_income,
                                'description' => 'Weekly Reward',
                            ]);
                            if (!$memberEarn->save()){
                                Log::error('Member Account not update. Internal Server Error');
                            }
                            $memberAccount = UserHasMemberShip::find($userMembership->userHasMemberShipId);
                            $accountTotal = $memberAccount->account_amount + $userMembership->weekly_income;
                            $memberAccount->account_amount = $accountTotal;
                            if (!$memberAccount->update()){
                                Log::error('Member Account not update. Internal Server Error');
                            }
                        }
                    }
                }
            }

        }

        $product = DB::table('products')
            ->where('products.id','=',$productId)
            ->first();
        $product_images = DB::table('product_images')
            ->where('product_images.product_id','=',$productId)
            ->get();
        $product->images = $product_images;
        if($user != 0){
            $product->user = $userId;
        }
        if (!$product) {
            return response()->json(['message' => 'Products not found'], 404);
        }
        return response()->json(['product' => $product], 200);
    }


    /**
     * Store a session cart.
     *
     * @param Request $request
     * @return void json
     */

    public function addToCart(Request $request)
    {
        $cart_data = $request->session()->get('cart');
        $cart_data[$request->id] = [
            'id'=>$request->id,
            'image'=>$request->image,
            'name'=>$request->name,
            'price'=>$request->price,
            'quantity'=>$request->quantity,
            'total'=>$request->total,
            'aff_user_id'=>$request->aff_user_id
        ];
        $request->session()->put('cart',$cart_data);
        return response()->json(['message' => 'Success'], 201);

    }

    /**
     * Remove a cart item.
     *
     * @param Request $request
     * @param $id
     * @return void json
     */

    public function removeFromCart(Request $request,$id)
    {
        $cart_data = $request->session()->get('cart');
        if (isset($cart_data[$id])){
            unset($cart_data[$id]);
        }
        $request->session()->put('cart',$cart_data);
        return response()->json(['message' => 'Success'], 201);

    }


    /**
     * Display a listing cart items.
     *
     * @param Request $request
     * @return void json
     */

    public function getCartItems(Request $request)
    {
        $cart_items = $request->session()->get('cart');
        return response()->json(['cart_items' => $cart_items], 201);
    }


    /**
     * Store a newly created Tags in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function create(Request $request)
    {
        $request->validate([
            'product_name' => 'required|unique:products|max:250',
            'description' => 'required',
            'market_price' => 'required|numeric',
            'buying_price' => 'required|numeric',
            'sell_price' => 'required|numeric',
            'selling_margin' => 'required|numeric',
            'quantity' => 'required|numeric',
            'images' => 'required',
            'product_category' => 'required',
        ]);

        $product = new Product([
            'product_name' => $request->product_name,
            'is_featured' => $request->is_featured,
            'description' => $request->description,
            'market_price' => $request->market_price,
            'buying_price' => $request->buying_price,
            'sell_price' => $request->sell_price,
            'selling_margin' => $request->selling_margin,
            'quantity' => $request->quantity,
            'sold_quantity' => $request->sold_quantity,
            'sku' => $request->sku,
        ]);

        if ($product->save()) {

            if ($request->hasfile('images')) {

                $images = $request->file('images');
                $count = 1;
                foreach ($images as $image) {
                    $original_name = strtolower(trim($image->getClientOriginalName()));
                    $file_name = time() . rand(100, 999) . $original_name;
                    $path = $image->storeAs('images/products', $file_name, 'public');

                    ProductImage::create([
                        'product_id' => $product->id,
                        'image_url' => '/storage/' . $path,
                        'is_main' => ($count == 1)
                    ]);
                    $count++;
                }
            }

            if ($request->hasAny('product_category')) {
                $sub_categories = $request->product_category;
                foreach ($sub_categories as $sub_category) {
                    ProductHasCategory::create([
                        'product_id' => $product->id,
                        'category_id' => $sub_category
                    ]);
                }
            }

            return response()->json(['message' => 'Product has been created'], 201);
        }
        return response()->json(['message' => 'Product not created. Internal Server Error'], 500);
    }

    /**
     * Edit the specified product.
     *
     * @param int $id
     * @return Response json
     */
    public function edit($id)
    {
        $product = DB::table('products')
            ->where('id', $id)->first();
        $product_category = DB::table('product_has_categories')
            ->select('id')
            ->where('product_id', $product->id)->get();
        $product_images = DB::table('product_images')
            ->select('image_url AS image')
            ->where('product_id', $product->id)->get();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->product_categories = [];
        $product->images = [];
        return response()->json(['product' => $product, 'product_category' => $product_category, 'product_images' => $product_images], 200);
    }


    public function productsAffiliateLink(Request $request)
    {
        $hashids = new Hashids('', 5);
        $url = url('/aff.click') . "/" . $hashids->encode($request->productId) . "/" . $hashids->encode($request->user()->id);
        return response()->json(['generateLink' => urlencode($url)], 200);
    }

}
