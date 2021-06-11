<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOIAffiliateCommissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('o_i_affiliate_commissions', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('order_item_id')->nullable(false);
            $table->foreignId('affiliate_user_id')->nullable(false);
            $table->double('direct_commission_pre_product')->nullable(false)->default(0);
            $table->double('total_direct_commission')->nullable(false)->default(0);
            $table->foreignId('level_three_user_id')->nullable(true);
            $table->double('level_three_commission')->nullable(true)->default(0);
            $table->foreignId('level_two_user_id')->nullable(true);
            $table->double('level_two_commission')->nullable(true)->default(0);
            $table->foreignId('level_one_user_id')->nullable(true);
            $table->double('level_one_commission')->nullable(true)->default(0);
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
        Schema::dropIfExists('o_i_affiliate_commissions');
    }
}
