<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembershipPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('membership_plans', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->nullable(false);
            $table->double('price');
            $table->integer('no_of_link_click_per_day');
            $table->double('value_for_point');
            $table->double('task_rewards');
            $table->double('total_reward_per_day');
            $table->double('bonus_rewards');
            $table->double('daily_income');
            $table->double('weekly_income');
            $table->double('monthly_income');
            $table->double('monthly_income_with_bonus');
            $table->double('annual_revenue');
            $table->double('registered_commission');
            $table->double('referral_commission');
            $table->date('withdrawal_date')->nullable(true);
            $table->boolean('stat')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('membership_plans');
    }
}
