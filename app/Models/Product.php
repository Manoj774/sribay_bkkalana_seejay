<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'product_name','description','market_price','buying_price','sell_price','selling_margin','quantity',
        'sku','main_category','stat','is_featured'
    ];

    public function orders(){
        return $this->hasMany(Order::class);
    }

}
