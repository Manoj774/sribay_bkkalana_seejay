<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductHasTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_has_tags', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('product_id')->nullable(false);
            $table->foreignId('tag_id')->nullable(false);
            $table->boolean('stat')->nullable(false)->default(true);
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
        Schema::dropIfExists('product_has_tags');
    }
}
