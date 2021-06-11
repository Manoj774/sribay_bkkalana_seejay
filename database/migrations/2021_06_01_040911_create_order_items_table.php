<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('order_id');
            $table->foreignId('product_id');
            $table->integer('quantity')->default(0);
            $table->double('total')->default(0);
            $table->foreignId('aff_user_id')->nullable(true);
            $table->double('profit_pre_product')->default(0);
            $table->double('total_profit')->default(0);
            $table->double('paid_commission_pre_product')->default(0);
            $table->double('total_paid_commission')->default(0);
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
        Schema::dropIfExists('order_items');
    }
}
