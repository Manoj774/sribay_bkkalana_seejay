<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{

    protected $fillable = [
        'payment_stat','payment_method','amount','transaction_id','card_no','received_date','order','membership','user_id','error',
    ];
}
