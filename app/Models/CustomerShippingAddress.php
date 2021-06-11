<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerShippingAddress extends Model
{
    protected $fillable = [
        'first_name','last_name','address','city','state','zip_code','phone_number',
        'email','user_id'
    ];
}
