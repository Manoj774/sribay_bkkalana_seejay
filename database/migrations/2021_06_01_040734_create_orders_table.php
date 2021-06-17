<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id');
            $table->foreignId('shipping_address')->nullable(true);
            $table->double('shipping_cost')->default(0.0);
            $table->double('tax')->default(0.0);
            $table->double('sub_total')->nullable(false);
            $table->double('net_amount')->nullable(false);
            $table->enum('order_stat',['Pending','Shipped','Delivered','Cancel'])->default('Pending');
            $table->dateTime('delivered_date');
            $table->text('note');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
