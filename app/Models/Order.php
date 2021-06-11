<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'shipping_address', 'shipping_cost', 'tax', 'sub_total', 'net_amount', 'order_stat', 'delivered_date', 'note'
    ];

//    public function user()
//    {
//        return $this->belongsTo(User::class, 'user_id');
//    }
//
//    public function product()
//    {
//        return $this->belongsTo(Product::class, 'product_id');
//    }

}
