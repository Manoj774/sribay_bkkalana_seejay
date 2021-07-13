<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('payment_stat')->nullable(false)->default(0);
            $table->string('payment_method');
            $table->double('amount');
            $table->string('transaction_id')->nullable(true);
            $table->string('card_no')->nullable(true);
            $table->dateTime('received_date')->nullable(true);
            $table->string('payment_slip')->nullable(true);
            $table->foreignId('order')->nullable(true);
            $table->foreignId('membership')->nullable(true);
            $table->foreignId('user_id')->nullable(false);
            $table->string('error')->nullable(true);
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
        Schema::dropIfExists('payments');
    }
}
