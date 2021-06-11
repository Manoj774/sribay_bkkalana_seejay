<?php

namespace App\Http\Controllers;

use App\Models\MemberEarnHistory;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrderController extends Controller
{
    /**
     * Display a listing of the orders.
     *
     * @return Response json
     */

    public function index(){
        $orders = DB::table('orders')
            ->select('users.first_name','users.last_name','payments.payment_stat')
            ->join('users','orders.user_id','=','users.id')
            ->join('payments','orders.id','=','payment.order')
            ->where('orders.order_stat','=','Pending')
            ->get();
        if (!$orders) {
            return response()->json(['message' => 'orders not found'], 404);
        }
        return response()->json(['orders' => $orders], 200);
    }

    /**
     * Display a specific order by id.
     *
     * @param $id
     * @return Response json
     */

    public function show($id){
        $order = DB::table('orders')
            ->select('users.first_name','users.last_name','payments.payment_stat')
            ->join('users','orders.user_id','=','users.id')
            ->join('payments','orders.id','=','payment.order')
            ->where('orders.order_stat','=','Pending')
            ->where('orders.id','=',$id)
            ->first();
        if (!$order) {
            return response()->json(['message' => 'order not found'], 404);
        }
        return response()->json(['order' => $order], 200);
    }

    public function getUserOrders($id){
        $orders = DB::table('orders')
            ->join('users','orders.user_id','=','users.id')
            ->join('payments','orders.id','=','payment.order')
            ->where('users.id','=',$id)
            ->get();
        if (!$orders) {
            return response()->json(['message' => 'orders not found'], 404);
        }
        return response()->json(['orders' => $orders], 200);
    }

    public function create(Request $request){

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

        if($order->save()){

            $payment = new Payment([
                'payment_stat'=> $request->payment_stat,
                'payment_method'=> $request->payment_method,
                'amount'=> $request->amount,
                'transaction_id'=> $request->transaction_id,
                'card_no'=> $request->card_number,
                'received_date'=> $request->received_date,
                'order'=> $order->id,
                'user_id'=> $user_data['id'],
            ]);

            if (!$payment->save()){
                Log::error('Payment save error');
            }

            foreach ($cart_data as $product) {

                $productData = DB::table('products')
                            ->where('id', $product['id'])->first();

                $orderItems = new OrderItem([
                    'order_id' => $order->id,
                    'product_id' => $product['id'],
                    'quantity' => $product['quantity'],
                    'total' => $product['total'],
                    'profit_pre_product' => ($productData->sell_price - $productData->buying_price),
                    'total_profit' => ($productData->sell_price - $productData->buying_price) * $product['quantity'],
                    'aff_user_id' => isset($product['aff_user_id']) ? $product['aff_user_id'] : null,
                ]);

                if($orderItems->save()){

                    if (isset($product['aff_user_id'])){

                        $$afiliate_user_data = DB::table('users')
                        ->where('id', $product['aff_user_id'])->first();

                        $direct_commission_pre_product = $productData->sell_price * $productData->selling_margin / 100;
                        $total_direct_commission = $direct_commission_pre_product * $product['quantity'];
                        $level_three_commission_pre_product = 0.0;
                        $level_three__total_commission = 0.0;
                        $level_two_commission = 0.0;
                        $level_one_commission = 0.0;
                        $profit_pre_product = 0.0;
                        $total_profit = 0.0;
                        $paid_commission_pre_product = $direct_commission_pre_product;
                        $total_paid_commission = $total_direct_commission;

                        $afiliate_user = new MemberEarnHistory([
                            'user_id' => $product['aff_user_id'],
                            'earn_amount' => $total_direct_commission,
                            'description' => 'Product Sale Commission'
                        ]);

                        if($afiliate_user->save()){

                            $afiliate_user_account = DB::table('user_has_member_ships')
                            ->where('user_id', $product['aff_user_id'])->first();

                            $afiliate_user_account = $afiliate_user_account->account_amount + $total_direct_commission;

                            if($afiliate_user_account->update()){

                                if(isset($afiliate_user_data->referral_id)){

                                    $level_three_afiliate = DB::table('users')
                                    ->where('id', $afiliate_user_data->referral_id)->first();
                                    
                                    if ($level_three_afiliate){
    
                                        if (($productData->selling_margin/100) > (0/100)){
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (45 / 100 )* 100) / 100);
                                            $level_three__total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product += $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three__total_commission;
                                        }
            
                                        if (($productData->selling_margin/100) > (10/100)){
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (35 / 100 )* 100) / 100);
                                            $level_three__total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product += $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three__total_commission;
                                        }
            
                                        if (($productData->selling_margin/100) > (25/100)){
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (20 / 100 )* 100) / 100);
                                            $level_three__total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product += $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three__total_commission;
                                        }
            
                                        if (($productData->selling_margin/100) > (50/100)){
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (15 / 100 )* 100) / 100);
                                            $level_three__total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product += $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three__total_commission;
                                        }
            
                                        if (($productData->selling_margin/100) > (75/100)){
                                            $level_three_commission_pre_product = ($productData->sell_price * (($productData->selling_margin / 100) * (10 / 100 )* 100) / 100);
                                            $level_three__total_commission = $level_three_commission_pre_product * $product['quantity'];
                                            $paid_commission_pre_product += $level_three_commission_pre_product;
                                            $total_paid_commission = $level_three__total_commission;
                                        }
            
    
                                        $level_three_earn_history = new MemberEarnHistory([
                                            'user_id' => $level_three_afiliate->id,
                                            'earn_amount' => $level_three__total_commission,
                                            'description' => 'Product Sale Referral Commission'
                                        ]);
                
                                        if($level_three_earn_history->save()){
                                        
                                        $level_three_user_account = DB::table('user_has_member_ships')
                                        ->where('user_id', $level_three_afiliate->id)->first();
                
                                        $level_three_user_account = $level_three_user_account->account_amount + $level_three__total_commission;
    
                                        if($level_three_user_account->update()){
    
                                            if(isset($level_three_afiliate->referral_id)){

                                                $level_two_afiliate = DB::table('users')
                                                ->where('id', $level_three_afiliate->referral_id)->first();
                    
                                                if ($level_two_afiliate){
        
                                                    $paid_commission_pre_product += $level_three_commission_pre_product / 2;
                                                    $level_two_commission = $level_three__total_commission / 2;
                                                    $total_paid_commission = $total_paid_commission + $level_two_commission;
                                                    
                                                    $level_two_earn_history = new MemberEarnHistory([
                                                        'user_id' => $level_two_afiliate->id,
                                                        'earn_amount' => $level_two_commission,
                                                        'description' => 'Product Sale Referral Commission'
                                                    ]);
        
                                                    if($level_two_earn_history->save()){
        
                                                    $level_two_user_account = DB::table('user_has_member_ships')
                                                    ->where('user_id', $level_two_afiliate->id)->first();
                                
                                                    $level_two_user_account = $level_two_user_account->account_amount + $level_two_commission;
                    
                                                    if($level_two_user_account->update()){
                                                       
                                                        if(isset($level_two_afiliate->referral_id)){

                                                            $level_one_afiliate = DB::table('users')
                                                            ->where('id', $level_two_afiliate->referral_id)->first();
                            
                                                            if ($level_one_afiliate){
                                                                
                                                                $paid_commission_pre_product += ($level_three_commission_pre_product / 2) / 2;
                                                                $level_one_commission = $level_two_commission / 2;
                                                                $total_paid_commission = $total_paid_commission + $level_one_commission;
            
                                                                $level_one_earn_history = new MemberEarnHistory([
                                                                    'user_id' => $level_one_afiliate->id,
                                                                    'earn_amount' => $level_one_commission,
                                                                    'description' => 'Product Sale Referral Commission'
                                                                ]);
            
                                                                if($level_one_earn_history->save()){
            
                                                                    $level_one_user_account = DB::table('user_has_member_ships')
                                                                    ->where('user_id', $level_one_afiliate->id)->first();
                                                
                                                                    $level_one_user_account = $level_two_user_account->account_amount + $level_two_commission;
            
                                                                    if(!$level_one_user_account->update()){
                                                                        Log::error("level one user account update faild.");
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
                                
                            }
                        }

                        $profit_pre_product = $orderItems->profit_pre_product - $paid_commission_pre_product;
                        $total_profit = $orderItems->total_profit - $total_paid_commission;

                        $orderItems->profit_pre_product = $profit_pre_product;
                        $orderItems->total_profit = $total_profit;

                        if(!$orderItems->update()){
                            Log::error("Order item update faild.");
                        }
                    }
                }

            }
            return response()->json(['message' => "Order Successful",'order_no'=> sprintf("%05d", $pr_id)], 200);
        }

    }

}
