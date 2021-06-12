<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingCartItems extends Model
{
    use HasFactory;
    protected $fillable = [
        'shopping_cart_id','product_id','image','name','quantity','price','total','aff_user_id',
    ];
}
