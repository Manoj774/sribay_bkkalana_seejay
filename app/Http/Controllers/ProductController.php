<?php

namespace App\Http\Controllers;

use App\Models\Category;
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
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Jenssegers\Agent\Agent;
use SebastianBergmann\Environment\Console;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

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

    /**
     * Display a listing of the Features product.
     *
     * @return Response json
     */


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

    public function getProductFilter(Request $request){

        $text = $request->searchText;
        $categories = $request->product_categories;
        $minPrice = $request->minPrice;
        $maxPrice = $request->maxPrice;


        $sql = 'SELECT products.id,products.product_name,products.sell_price,product_images.image_url';
        $sql .= ' FROM products';
        $sql .= ' JOIN product_images ON products.id = product_images.product_id';
        $sql .= ' JOIN product_has_categories ON products.id = product_has_categories.product_id';
        $sql .= ' JOIN categories ON product_has_categories.category_id = categories.id';
        if ($text != null || $text != '' || $categories != null || $maxPrice > 0){
            $sql .= ' WHERE';
        }

        if ($text != null && $text != ''){
            $sql .= " categories.name LIKE '%". $text ."%'";
            $sql .= " OR products.product_name LIKE '%". $text ."%'";
        }

        if ($categories != null){
            if ($text != null && $text != ''){
                $sql .= ' AND';
            }

            $sql .= ' product_has_categories.category_id IN '.$categories.'';
        }

        if($maxPrice > 0){
            if ($categories != null){
                $sql .= ' AND';
            }
            $sql .= ' products.sell_price BETWEEN '.$minPrice.' AND '.$maxPrice.'';
        }

        $sql .= ' GROUP BY products.id';
        $products = DB::select($sql);

        if (!$products) {
            return response()->json(['message' => 'Products not found'], 404);
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
                    try {
                        $image->move(public_path('images/products'), $file_name);
                        ProductImage::create([
                            'product_id' => $product->id,
                            'image_url' => '/images/products/' . $file_name,
                            'is_main' => ($count == 1)
                        ]);
                        $count++;
                    }catch (FileException $exception){
                        Log::error($exception->getMessage());
                    }

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
            ->select('category_id')
            ->where('product_id', $product->id)->get();
        $product_images = DB::table('product_images')
            ->select('id','image_url AS image')
            ->where('product_id', $product->id)->get();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->product_categories = [];
        $product->images = [];
        return response()->json(['product' => $product, 'product_category' => $product_category, 'product_images' => $product_images], 200);
    }

    /**
     * Update the specified product.
     *
     * @param Request $request
     * @return void json
     */
    public function update(Request $request){
        $validator =  Validator::make($request->all(), [
            'product_name' => 'required|max:250',
            'description' => 'required',
            'market_price' => 'required|numeric',
            'buying_price' => 'required|numeric',
            'sell_price' => 'required|numeric',
            'selling_margin' => 'required|numeric',
            'quantity' => 'required|numeric',
            'product_category' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 401);
        }

        $product = Product::find($request->id);

        if (!$product){
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->product_name = $request->product_name;
        $product->description = $request->description;
        $product->market_price = $request->market_price;
        $product->buying_price = $request->buying_price;
        $product->sell_price = $request->sell_price;
        $product->selling_margin = $request->selling_margin;
        $product->sku = $request->sku;
        $product->quantity = $request->quantity;
        $product->is_featured = $request->is_featured;

        if (!$product->update()){
            return response()->json(['message' => 'Product not updated. Internal Server Error'], 500);
        }

        if (isset($request->images)){
            if ($request->hasfile('images')) {

                $images = $request->file('images');
                $count = 1;
                foreach ($images as $image) {
                    $original_name = strtolower(trim($image->getClientOriginalName()));
                    $file_name = time() . rand(100, 999) . $original_name;
                    try {
                        $image->move(public_path('images/products'), $file_name);
                        ProductImage::create([
                            'product_id' => $product->id,
                            'image_url' => '/images/products/' . $file_name,
                            'is_main' => ($count == 1)
                        ]);
                        $count++;
                    }catch (FileException $exception){
                        Log::error($exception->getMessage());
                    }

                }
            }
        }

        $productCategory = ProductHasCategory::where('product_id','=',$request->id)->get();

        foreach ($productCategory as $item){
            if (!$item->delete()){
             Log::error('Category remove failed..');
            }
        }

        if (isset($request->product_category)) {
            $categories = $request->product_category;
            foreach ($categories as $category) {
                ProductHasCategory::create([
                    'product_id' => $product->id,
                    'category_id' => $category
                ]);
            }
        }
        return response()->json(['message' => 'Product has been updated'], 201);

    }

    /**
     * Remove the specified product image.
     *
     * @param int $id
     * @return void json
     */
    public function removeImage($id){

        $image = ProductImage::find($id);
        if (File::exists(public_path($image->image_url))){
            if (File::delete(public_path($image->image_url))){
                if ($image->delete()){
                    return response()->json(['message' => 'Product image deleted successfully.'], 200);
                }
            }
        }
        return response()->json(['message' => 'Product image not deleted. Internal Server Error'], 500);
    }

    /**
     * destroy the specified product in storage.
     *
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id){

        $product = Product::find($id);
        $productCategory = ProductHasCategory::where('product_id','=',$id)->get();
        $productImages = ProductImage::where('product_id','=',$id)->get();

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if (!$product->delete()){
            return response()->json(['message' => 'Product not removed. Internal Server Error'], 500);
        }

        foreach ($productCategory as $item){
            if (!$item->delete()){
                Log::error('Product Category remove failed..');
            }
        }

        foreach ($productImages as $item){
            if (File::exists(public_path($item->image_url))){
                if (File::delete(public_path($item->image_url))){
                    if (!$item->delete()){
                        Log::error('Product Image remove failed..');
                    }
                }
            }
        }
        return response()->json(['message' => 'Product has been removed'], 200);
    }


    public function productsAffiliateLink(Request $request)
    {
        $hashids = new Hashids('', 5);
        $url = url('/aff.click') . "/" . $hashids->encode($request->productId) . "/" . $hashids->encode($request->user()->id);
        return response()->json(['generateLink' => urlencode($url)], 200);
    }

}
