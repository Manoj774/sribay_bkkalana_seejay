<?php

namespace App\Http\Controllers;

use App\Export\OrderExport;
use App\Models\MemberEarnHistory;
use App\Models\OIAffiliateCommission;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Models\ShoppingCartItems;
use App\Models\UserHasMemberShip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class OrderController extends Controller
{
    /**
     * Display a listing of the orders.
     *
     * @return Response json
     */

    public function index()
    {
        $orders = DB::table('orders')
            ->select('orders.id', 'orders.created_at', 'orders.net_amount', 'orders.order_stat', DB::raw('CONCAT(users.first_name," ",users.last_name) AS full_name'),
                'payments.payment_stat', 'payments.transaction_id',
                'customer_shipping_addresses.first_name AS shipping_first_name', 'customer_shipping_addresses.last_name AS shipping_last_name',
                'customer_shipping_addresses.address AS shipping_address', 'customer_shipping_addresses.city AS shipping_city',
                'customer_shipping_addresses.state AS shipping_state', 'customer_shipping_addresses.zip_code AS sipping_zip_code',
                'customer_shipping_addresses.phone_number AS shipping_phone_number',
                'orders.shipping_cost','orders.shipping_cost','orders.tax','orders.sub_total')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->join('customer_shipping_addresses', 'users.id', '=', 'customer_shipping_addresses.user_id')
            ->join('payments', 'orders.id', '=', 'payments.order')
            ->where('orders.order_stat', '=', 'Pending')
            ->get();
        if ($orders) {
            $ordersData = array();
            foreach ($orders as $order) {
                $order_items = DB::table('order_items')
                    ->select('order_items.id', 'order_items.quantity', 'order_items.total', 'products.product_name',
                        'product_images.image_url')
                    ->join('products', 'order_items.product_id', '=', 'products.id')
                    ->join('product_images', 'products.id', '=', 'product_images.product_id')
                    ->where('order_id', '=', $order->id)
                    ->groupBy('order_items.id')
                    ->get();
                $order->orderId = sprintf('%06d',$order->id);
                $order->order_items = $order_items;
                $ordersData[] = $order;
            }

            return response()->json(['orders' => $ordersData], 200);
        }
        return response()->json(['message' => 'orders not found'], 404);
    }


    public function filterOrders(Request $request){

        $dateFrom = $request->dateFrom;
        $dateTo = $request->dateTo;
        $status= $request->status;


        $sql  = 'SELECT `orders`.`id`, `orders`.`created_at`, `orders`.`net_amount`, `orders`.`order_stat`, ';
        $sql .= ' `orders`.`shipping_cost`, `orders`.`shipping_cost`, `orders`.`tax`, `orders`.`sub_total`, ';
        $sql .= ' CONCAT(users.first_name," ",users.last_name) AS full_name, `payments`.`payment_stat`, ';
        $sql .= '`payments`.`transaction_id`, `customer_shipping_addresses`.`first_name` ';
        $sql .= ' AS `shipping_first_name`, `customer_shipping_addresses`.`last_name`';
        $sql .= ' AS `shipping_last_name`, `customer_shipping_addresses`.`address` ';
        $sql .= ' AS `shipping_address`, `customer_shipping_addresses`.`city` ';
        $sql .= ' AS `shipping_city`, `customer_shipping_addresses`.`state` ';
        $sql .= ' AS `shipping_state`, `customer_shipping_addresses`.`zip_code` ';
        $sql .= ' AS `sipping_zip_code`, `customer_shipping_addresses`.`phone_number` ';
        $sql .= ' AS `shipping_phone_number` FROM `orders` ';
        $sql .= ' INNER JOIN `users` ON `orders`.`user_id` = `users`.`id` ';
        $sql .= ' INNER JOIN `customer_shipping_addresses` ON `users`.`id` = `customer_shipping_addresses`.`user_id` ';
        $sql .= ' INNER JOIN `payments` ON `orders`.`id` = `payments`.`order` ';
        $sql .= ' WHERE `orders`.`order_stat`="'.$status.'"';
        if ($dateTo != null && $dateTo != ''){
            $sql .= ' AND orders.created_at between "'.$dateFrom.'" and "'.$dateTo.'"';
        }

        $orders = DB::select($sql);

        if ($orders) {
            $ordersData = array();
            foreach ($orders as $order) {
                $order_items = DB::table('order_items')
                    ->select('order_items.id', 'order_items.quantity', 'order_items.total', 'products.product_name',
                        'product_images.image_url')
                    ->join('products', 'order_items.product_id', '=', 'products.id')
                    ->join('product_images', 'products.id', '=', 'product_images.product_id')
                    ->where('order_id', '=', $order->id)
                    ->groupBy('order_items.id')
                    ->get();
                $order->orderId = sprintf('%06d',$order->id);
                $order->order_items = $order_items;
                $ordersData[] = $order;
            }

            return response()->json(['orders' => $ordersData], 200);
        }
        return response()->json(['message' => 'orders not found'], 404);
    }



    /**
     * Display a listing of the orders by user.
     *
     * @param Request $request
     * @return Response json
     */
    public function getUserOrders(Request $request)
    {

        $orders = DB::table('orders')
            ->select('orders.id', 'orders.created_at', 'orders.net_amount', 'orders.order_stat', DB::raw('CONCAT(users.first_name," ",users.last_name) AS full_name'),
                'payments.payment_stat', 'payments.transaction_id',
                'customer_shipping_addresses.first_name AS shipping_first_name', 'customer_shipping_addresses.last_name AS shipping_last_name',
                'customer_shipping_addresses.address AS shipping_address', 'customer_shipping_addresses.city AS shipping_city',
                'customer_shipping_addresses.state AS shipping_state', 'customer_shipping_addresses.zip_code AS sipping_zip_code',
                'customer_shipping_addresses.phone_number AS shipping_phone_number',
                'orders.shipping_cost','orders.shipping_cost','orders.tax','orders.sub_total')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->join('customer_shipping_addresses', 'users.id', '=', 'customer_shipping_addresses.user_id')
            ->join('payments', 'orders.id', '=', 'payments.order')
            ->where('orders.user_id', '=', $request->user()->id)
            ->get();
        if ($orders) {
            $ordersData = array();
            foreach ($orders as $order) {
                $order_items = DB::table('order_items')
                    ->select('order_items.id', 'order_items.quantity', 'order_items.total', 'products.product_name',
                        'product_images.image_url')
                    ->join('products', 'order_items.product_id', '=', 'products.id')
                    ->join('product_images', 'products.id', '=', 'product_images.product_id')
                    ->where('order_id', '=', $order->id)
                    ->groupBy('order_items.id')
                    ->get();
                $order->orderId = sprintf('%06d',$order->id);
                $order->order_items = $order_items;
                $ordersData[] = $order;
            }

            return response()->json(['orders' => $ordersData], 200);
        }
        return response()->json(['message' => 'orders not found'], 404);


    }


    /**
     * Display a specific order by id.
     *
     * @param $id
     * @return Response json
     */

    public function show($id)
    {
        $order = DB::table('orders')
            ->select('users.first_name', 'users.last_name', 'payments.payment_stat')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->join('payments', 'orders.id', '=', 'payment.order')
            ->where('orders.order_stat', '=', 'Pending')
            ->where('orders.id', '=', $id)
            ->first();
        if (!$order) {
            return response()->json(['message' => 'order not found'], 404);
        }
        return response()->json(['order' => $order], 200);
    }

//    public function getUserOrders($id){
//        $orders = DB::table('orders')
//            ->join('users','orders.user_id','=','users.id')
//            ->join('payments','orders.id','=','payment.order')
//            ->where('users.id','=',$id)
//            ->get();
//        if (!$orders) {
//            return response()->json(['message' => 'orders not found'], 404);
//        }
//        return response()->json(['orders' => $orders], 200);
//    }

    public function create(Request $request)
    {

        $user_data = $request->user;
        $cart_data = $request->cart;
        $shipping_address = $request->shippingAddress;

        $order = new Order([
            'user_id' => $user_data['id'],
            'shipping_address' => $shipping_address['id'],
            'shipping_cost' => $request->shippingCost,
            'tax' => $request->taxAmount,
            'sub_total' => $request->subtotal,
            'net_amount' => $request->amount,
        ]);

        if ($order->save()) {

            $payment = new Payment([
                'payment_stat' => $request->payment_stat,
                'payment_method' => $request->payment_method,
                'amount' => $request->amount,
                'transaction_id' => $request->transaction_id,
                'card_no' => $request->card_number,
                'received_date' => $request->received_date,
                'order' => $order->id,
                'user_id' => $user_data['id'],
            ]);

            if (!$payment->save()) {
                Log::error('Payment save error');
            }

            foreach ($cart_data as $product) {

                $productData = Product::find($product['product_id']);

                $orderItems = new OrderItem([
                    'order_id' => $order->id,
                    'product_id' => $product['product_id'],
                    'quantity' => $product['quantity'],
                    'total' => $product['total'],
                    'profit_pre_product' => ($productData->sell_price - $productData->buying_price),
                    'total_profit' => ($productData->sell_price - $productData->buying_price) * $product['quantity'],
                    'aff_user_id' => isset($product['aff_user_id']) ? $product['aff_user_id'] : null,
                ]);

                if ($orderItems->save()) {

                    $direct_commission_pre_product = 0.0;
                    $total_direct_commission = 0.0;
                    $level_three_user_id = null;
                    $level_three_commission_pre_product = 0.0;
                    $level_three_total_commission = 0.0;
                    $level_two_user_id = null;
                    $level_two_commission = 0.0;
                    $level_one_user_id = null;
                    $level_one_commission = 0.0;
                    $profit_pre_product = 0.0;
                    $total_profit = 0.0;
                    $paid_commission_pre_product = 0.0;
                    $total_paid_commission = 0.0;


                    if (isset($product['aff_user_id'])) {

                        $afiliate_user_data = DB::table('users')
                            ->where('id', $product['aff_user_id'])->first();

                        $direct_commission_pre_product = $productData->sell_price * $productData->selling_margin / 100;
                        $total_direct_commission = $direct_commission_pre_product * $product['quantity'];

                        $afiliate_user = new MemberEarnHistory([
                            'user_id' => $product['aff_user_id'],
                            'earn_amount' => $total_direct_commission,
                            'description' => 'Product Sale Commission'
                        ]);

                        if ($afiliate_user->save()) {

                            $afiliate_user_account = UserHasMemberShip::where('user_id', $product['aff_user_id'])->firstOrFail();

                            $afiliate_user_account->account_amount = $afiliate_user_account->account_amount + $total_direct_commission;

                            if ($afiliate_user_account->update()) {

                                if (isset($afiliate_user_data->referral_id)) {

                                    $level_three_afiliate = DB::table('users')
                                        ->where('id', $afiliate_user_data->referral_id)->first();

                                    if ($level_three_afiliate) {

                                        $level_three_user_id = $level_three_afiliate->id;

                                        if (($productData->selling_margin / 100) > (0 / 100)) {
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (45 / 100) * 100) / 100);
                                            $level_three_total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product = $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three_total_commission;
                                        }

                                        if (($productData->selling_margin / 100) > (10 / 100)) {
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (35 / 100) * 100) / 100);
                                            $level_three_total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product = $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three_total_commission;
                                        }

                                        if (($productData->selling_margin / 100) > (25 / 100)) {
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (20 / 100) * 100) / 100);
                                            $level_three_total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product = $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three_total_commission;
                                        }

                                        if (($productData->selling_margin / 100) > (50 / 100)) {
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (15 / 100) * 100) / 100);
                                            $level_three_total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product = $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three_total_commission;
                                        }

                                        if (($productData->selling_margin / 100) > (75 / 100)) {
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (10 / 100) * 100) / 100);
                                            $level_three_total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product = $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three_total_commission;
                                        }


                                        $level_three_earn_history = new MemberEarnHistory([
                                            'user_id' => $level_three_afiliate->id,
                                            'earn_amount' => $level_three_total_commission,
                                            'description' => 'Product Sale Referral Commission'
                                        ]);

                                        if ($level_three_earn_history->save()) {

                                            $level_three_user_account = UserHasMemberShip::where('user_id', $level_three_afiliate->id)->first();

                                            $level_three_user_account->account_amount = $level_three_user_account->account_amount + $level_three_total_commission;

                                            if ($level_three_user_account->update()) {

                                                if (isset($level_three_afiliate->referral_id)) {

                                                    $level_two_affiliate = DB::table('users')
                                                        ->where('id', $level_three_afiliate->referral_id)->first();

                                                    if ($level_two_affiliate) {

                                                        $level_two_user_id = $level_two_affiliate->id;

                                                        $paid_commission_pre_product += $level_three_commission_pre_product / 2;
                                                        $level_two_commission = $level_three_total_commission / 2;
                                                        $total_paid_commission = $total_paid_commission + $level_two_commission;

                                                        $level_two_earn_history = new MemberEarnHistory([
                                                            'user_id' => $level_two_affiliate->id,
                                                            'earn_amount' => $level_two_commission,
                                                            'description' => 'Product Sale Referral Commission'
                                                        ]);

                                                        if ($level_two_earn_history->save()) {

                                                            $level_two_user_account = UserHasMemberShip::where('user_id', $level_two_affiliate->id)->first();

                                                            $level_two_user_account->account_amount = $level_two_user_account->account_amount + $level_two_commission;

                                                            if ($level_two_user_account->update()) {

                                                                if (isset($level_two_afiliate->referral_id)) {

                                                                    $level_one_affiliate = DB::table('users')
                                                                        ->where('id', $level_two_afiliate->referral_id)->first();

                                                                    if ($level_one_affiliate) {

                                                                        $level_one_user_id = $level_one_affiliate->id;

                                                                        $paid_commission_pre_product += ($level_three_commission_pre_product / 2) / 2;
                                                                        $level_one_commission = $level_two_commission / 2;
                                                                        $total_paid_commission = $total_paid_commission + $level_one_commission;

                                                                        $level_one_earn_history = new MemberEarnHistory([
                                                                            'user_id' => $level_one_affiliate->id,
                                                                            'earn_amount' => $level_one_commission,
                                                                            'description' => 'Product Sale Referral Commission'
                                                                        ]);

                                                                        if ($level_one_earn_history->save()) {

                                                                            $level_one_user_account = UserHasMemberShip::where('user_id', $level_one_affiliate->id)->first();

                                                                            $level_one_user_account->account_amount = $level_one_user_account->account_amount + $level_one_commission;

                                                                            if (!$level_one_user_account->update()) {
                                                                                Log::error("level one user account update failed.");
                                                                            }

                                                                        }

                                                                    }

                                                                }

                                                            }

                                                        }

                                                    }

                                                }

                                            }

                                        }

                                    }

                                }

                                $paid_commission_pre_product += $direct_commission_pre_product;
                                $total_paid_commission += $total_direct_commission;

                            }


                            $oiAffiliateCommission = new OIAffiliateCommission([
                                'order_item_id' => $orderItems->id,
                                'affiliate_user_id' => $product['aff_user_id'],
                                'direct_commission_pre_product' => $direct_commission_pre_product,
                                'total_direct_commission' => $total_direct_commission,
                                'level_three_user_id' => $level_three_user_id,
                                'level_three_commission' => $level_three_total_commission,
                                'level_two_user_id' => $level_two_user_id,
                                'level_two_commission' => $level_two_commission,
                                'level_one_user_id' => $level_one_user_id,
                                'level_one_commission' => $level_one_commission,
                            ]);

                            if (!$oiAffiliateCommission->save()) {
                                Log::error("Order item affiliate commission save failed.");
                            }

                        }

                    }

                    $profit_pre_product = ($productData->buying_price - $productData->selling_margin) - $paid_commission_pre_product;
                    $total_profit = (($productData->buying_price - $productData->selling_margin) * $product['quantity']) - $total_paid_commission;

                    $orderItems->profit_pre_product = $profit_pre_product;
                    $orderItems->total_profit = $total_profit;
                    $orderItems->paid_commission_pre_product = $paid_commission_pre_product;
                    $orderItems->total_paid_commission = $total_paid_commission;

                    if ($orderItems->update()) {
                        $productData->quantity = $productData->quantity - $product['quantity'];
                        if (!$productData->update()) {
                            Log::error("product Data update failed.");
                        }
                    }

                }

            }
            $shoppingCart = ShoppingCart::where('user_id','=',$request->user()->id)->first();
            $shoppingCartItem = ShoppingCartItems::where('shopping_cart_id','=',$shoppingCart->id)->get();
            foreach ($shoppingCartItem as $value){
                if (!$value->delete()){
                    return false;
                }
            }
            if ($shoppingCart->delete()){
                return response()->json(['message' => "Order Successful", 'order_no' => sprintf("%05d", $order->id)], 200);
            }
            if (!$request->user()){
                $request->session()->remove('cart');
                return response()->json(['message' => "Order Successful", 'order_no' => sprintf("%05d", $order->id)], 200);
            }

            return response()->json(['message' => "Order Successful", 'order_no' => sprintf("%05d", $order->id)], 200);

        }

    }

    public function updateOrderStatus(Request $request){
        $order = Order::where('id','=',$request->id)->first();
        $order->order_stat = $request->status;
        if (!$order->update()){
            return response()->json(['message' => 'Order Status Update failed. Internal Server Error'], 500);
        }
        return response()->json(['message' => "Order Status Update Successful"], 200);
    }


}
