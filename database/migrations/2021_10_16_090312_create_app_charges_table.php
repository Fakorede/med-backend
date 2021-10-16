<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppChargesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_charges', function (Blueprint $table) {
            $table->id();
            $table->decimal('dispatch_base_price', 5, 2)->default(0);
            $table->decimal('dispatch_price_per_km', 5, 2)->default(0);
            $table->decimal('errand_base_price', 5, 2)->default(0);
            $table->decimal('errand_price_per_km', 5, 2)->default(0);
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
        Schema::dropIfExists('app_charges');
    }
}
