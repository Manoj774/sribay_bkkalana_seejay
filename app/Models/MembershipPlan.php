<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MembershipPlan extends Model
{
    protected $fillable = [
        'name','price','no_of_link_click_per_day','task_rewards','total_reward_per_day','bonus_rewards',
        'daily_income','weekly_income','monthly_income','monthly_income_with_bonus','annual_revenue',
        'registered_commission','referral_commission','stat',
    ];
}
