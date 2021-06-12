<?php

namespace App\Http\Controllers;

use App\Models\ShoppingCart;
use App\Models\ShoppingCartItems;
use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!$request->user()){
            $cart_items = $request->session()->get('cart');
            return response()->json(['cart_items' => $cart_items], 201);
        }

        $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
        if ($shoppingCart){
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)->get();
            if ($shoppingCartItem){
                return response()->json(['cart_items' => $shoppingCartItem], 201);
            }
        }

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->user()){
            $cart_data = $request->session()->get('cart');

            if(!isset($cart_data[$request->product_id])){

                $cart_data[$request->product_id] = [
                    'product_id'=>$request->product_id,
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

            $new_quantity = $cart_data[$request->product_id]['quantity'] + $request->quantity;

            $cart_data[$request->product_id] = [
                'product_id'=>$request->product_id,
                'image'=>$request->image,
                'name'=>$request->name,
                'price'=>$request->price,
                'quantity'=>$new_quantity,
                'total'=>$request->total,
                'aff_user_id'=>$request->aff_user_id
            ];
            $request->session()->put('cart',$cart_data);
            return response()->json(['message' => 'Success'], 201);


        }
        $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
        if ($shoppingCart){
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)
                                ->where('product_id','=',$request->product_id)->first();
            if ($shoppingCartItem){
                $shoppingCartItem->quantity = $shoppingCartItem->quantity + $request->quantity;
                $shoppingCartItem->total = $shoppingCartItem->total + $request->total * $request->quantity;
                if ($shoppingCartItem->update()){
                    return response()->json(['message' => 'Success'], 201);
                }
            }
            $shoppingCartItem = new ShoppingCartItems([
                'shopping_cart_id' => $shoppingCart->id,
                'product_id'=>$request->product_id,
                'image'=>$request->image,
                'name'=>$request->name,
                'price'=>$request->price,
                'quantity'=>$request->quantity,
                'total'=>$request->total,
                'aff_user_id'=>$request->aff_user_id
            ]);

            if ($shoppingCartItem->save()){
                return response()->json(['message' => 'Success'], 201);
            }
        }

        $shoppingCart = new ShoppingCart([
            'user_id'=>$request->user()->id,
        ]);

        if ($shoppingCart->save()){

            $shoppingCartItem = new ShoppingCartItems([
                'shopping_cart_id' => $shoppingCart->id,
                'product_id'=>$request->product_id,
                'image'=>$request->image,
                'name'=>$request->name,
                'price'=>$request->price,
                'quantity'=>$request->quantity,
                'total'=>$request->total,
                'aff_user_id'=>$request->aff_user_id
            ]);

            if ($shoppingCartItem->save()){
                return response()->json(['message' => 'Success'], 201);
            }
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if (!$request->user()){
            $cart_data = $request->session()->get('cart');
            $cart_data[$request->product_id] = [
                'product_id'=>$request->product_id,
                'image'=>$request->image,
                'name'=>$request->name,
                'price'=>$request->price,
                'quantity'=> $request->quantity,
                'total'=>$request->total,
                'aff_user_id'=>$request->aff_user_id
            ];
            $request->session()->put('cart',$cart_data);
            return response()->json(['message' => 'Success'], 201);
        }
        $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
        if ($shoppingCart){
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)
                ->where('product_id','=',$request->product_id)->first();
            if ($shoppingCartItem){
                $shoppingCartItem->quantity = $request->quantity;
                $shoppingCartItem->total = $request->total;
                if ($shoppingCartItem->update()){
                    return response()->json(['message' => 'Success'], 201);
                }
            }
        }

    }

    /**
     * Remove a cart item.
     *
     * @param Request $request
     * @param $id
     * @return void json
     */

    public function destroyCartItem(Request $request,$id)
    {
        if (!$request->user()){
            $cart_data = $request->session()->get('cart');
            if (isset($cart_data[$id])){
                unset($cart_data[$id]);
            }
            $request->session()->put('cart',$cart_data);
            return response()->json(['message' => 'Success'], 201);
        }
        $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
        if ($shoppingCart){
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)
                ->where('product_id','=',$id)->first();
            if ($shoppingCartItem->delete()){
                $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)->get();
                if (count($shoppingCartItem) == 0){
                    if ($shoppingCart->delete()){
                        return response()->json(['message' => 'Success'], 201);
                    }
                    return response()->json(['message' => 'Error'], 500);
                }
                return response()->json(['message' => 'Success'], 201);
            }
            return response()->json(['message' => 'Error'], 500);
        }


    }

    /**
     * Remove the all cart items specified user resource from storage.
     *
     * @param Request $request
     * @return bool
     */
    public function destroy(Request $request)
    {
        if (!$request->user()){
            $request->session()->remove('cart');
            return true;
        }
        $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
        if ($shoppingCart->delete()){
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)->get();
            foreach ($shoppingCartItem as $value){
                if (!$value->delete()){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

}
