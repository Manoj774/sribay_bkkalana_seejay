<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShoppingCartController extends Controller
{
    /**
     * Display a listing of the cart Item in user.
     *
     * @return Response json
     */

    public function show()
    {
        $cart = array();



        return response()->json(['cart' => $cart], 200);

    }

}
