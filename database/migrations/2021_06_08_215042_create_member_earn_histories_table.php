<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemberEarnHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_earn_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id')->nullable(false);
            $table->double('earn_amount')->nullable(false);
            $table->string('description')->nullable(false);
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
        Schema::dropIfExists('member_earn_histories');
    }
}
