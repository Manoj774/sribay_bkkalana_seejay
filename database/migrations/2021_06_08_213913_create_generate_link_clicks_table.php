<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenerateLinkClicksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('generate_link_clicks', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_id')->nullable(false);
            $table->string('click_link')->nullable(false);
            $table->string('user_agent')->nullable(false);
            $table->string('ip_address')->nullable(false);
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
        Schema::dropIfExists('generate_link_clicks');
    }
}
