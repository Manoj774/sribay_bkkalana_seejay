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
            $table->string('payment_method')->nullable(false);
            $table->double('amount')->nullable(false);
            $table->string('transaction_id');
            $table->string('card_no');
            $table->dateTime('received_date');
            $table->foreignId('order')->nullable(true);
            $table->foreignId('membership')->nullable(true);
            $table->foreignId('user_id')->nullable(false);
            $table->string('error');
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
