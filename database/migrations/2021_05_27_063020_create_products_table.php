<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('product_name')->nullable(false);
            $table->longText('description')->nullable(false);
            $table->double('market_price')->nullable(false);
            $table->double('buying_price')->nullable(false);
            $table->double('sell_price')->nullable(false);
            $table->double('selling_margin')->nullable(false);
            $table->double('quantity')->nullable(false);
            $table->string('sku')->nullable(true);
            $table->boolean('is_featured')->nullable(false)->default(false);
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
        Schema::dropIfExists('products');
    }
}
