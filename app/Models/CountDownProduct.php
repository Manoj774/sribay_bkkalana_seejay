<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountDownProduct extends Model
{
    use HasFactory;

    protected $fillable = [
        'title','sub_title','description','product_id','deal_price','date_from','date_to',
    ];

}
