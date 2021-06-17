<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\ShoppingCart;
use App\Models\ShoppingCartItems;
use App\Models\User;
use App\Models\UserHasMemberShip;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * login user
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 400,'message' => $validator],400);
        }

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['status' => 401,'message' => "Username or Password is incorrect"],401);
        }

        $user = User::where("email",$request->email)->first();

        if (!$user->stat){
            return response()->json(['status' => 401,'message' => "Your account is deactivated"],403);
        }

        if (!$this->addSessionCartDataToUser($request,$user)){
            Log::error('cart data adding failed..');
        }

        if ($user->role == 3){
            $membership = UserHasMemberShip::where("user_id",$user->id)->first();
            $user->membership = $membership->membership_id;
        }
        $token = $user->createToken('user-token')->plainTextToken;
        Arr::add($user,'token',$token);

        return response()->json(['token' =>  $token,'role'=> $user->role,'user'=> $user],200);

    }

    public function addSessionCartDataToUser(Request $request,$user){

        $cart_data = $request->session()->get('cart');

        if ($cart_data){

            $shoppingCart = ShoppingCart::where('user_id','=',$user->id)->first();

            if (!$shoppingCart){
                $shoppingCart = new ShoppingCart([
                    'user_id'=>$user->id,
                ]);

                if ($shoppingCart->save()){

                    foreach ($cart_data as $cart){
                        $shoppingCartItem = new ShoppingCartItems([
                            'shopping_cart_id' => $shoppingCart->id,
                            'product_id'=>$cart['product_id'],
                            'image'=>$cart['image'],
                            'name'=>$cart['name'],
                            'price'=>$cart['price'],
                            'quantity'=>$cart['quantity'],
                            'total'=>$cart['total'],
                            'aff_user_id'=>$cart['aff_user_id']
                        ]);
                        if (!$shoppingCartItem->save()){
                            Log::error('cart data adding failed..');
                        }
                    }

                    return true;
                }
            }

            foreach ($cart_data as $cart){
                $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)
                    ->where('product_id','=',$cart['product_id'])->first();
                if ($shoppingCartItem){
                    $shoppingCartItem->quantity = $shoppingCartItem->quantity + $cart['quantity'];
                    $shoppingCartItem->total = $shoppingCartItem->total + $cart['total'];
                    if (!$shoppingCartItem->update()){
                        Log::error('cart data adding failed..');
                    }
                }
                $shoppingCartItem = new ShoppingCartItems([
                    'shopping_cart_id' => $shoppingCart->id,
                    'product_id'=>$cart['product_id'],
                    'image'=>$cart['image'],
                    'name'=>$cart['name'],
                    'price'=>$cart['price'],
                    'quantity'=>$cart['quantity'],
                    'total'=>$cart['total'],
                    'aff_user_id'=>$cart['aff_user_id']
                ]);
                if (!$shoppingCartItem->save()){
                    Log::error('cart data adding failed..');
                }

            }
            $request->session()->remove('cart');
            return true;
        }
    }


    /**
     * Logout form system.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logOut(Request $request)
    {
        // $user = $request->user();
        // $user->currentAccessToken()->delete();
        return response()->json(['msg' => 'Logout Successful'],200);
    }

}
