<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OIAffiliateCommission extends Model
{
    use HasFactory;
    protected $fillable = [
          'order_item_id', 'affiliate_user_id', 'direct_commission_pre_product', 'actual_commission_pre_product'
        , 'total_direct_commission', 'total_actual_commission', 'level_three_user_id', 'level_three_commission', 'level_two_user_id'
        , 'level_two_commission', 'level_one_user_id', 'level_one_commission'
    ];
}
