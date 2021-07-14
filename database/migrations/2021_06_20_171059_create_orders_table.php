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
            $table->id();

            $table->foreignId('user_id')
            ->nullable()
            ->constrained('users')
            ->onDelete('set null');

            $table->foreignId('rider_id')
            ->nullable()
            ->constrained('users')
            ->onDelete('set null');

            $table->string('item');
            $table->integer('quantity');
            $table->decimal('price', 13, 4);
            $table->text('description');
            $table->text('pickup_location')->nullable();
            $table->text('dropoff_location')->nullable();
            $table->string('receiver_name')->nullable();
            $table->string('receiver_mobile')->nullable();
            
            $table->string('tracking_number');
            $table->string('order_status')->nullable();
            $table->enum('order_type', ['Order', 'Dispatch']);
            $table->enum('payment_method', ['Paystack', 'Pay On Delivery']);

            $table->string('payment_status')->default('Not Paid');
            $table->boolean('payment_verified')->default(false);
            $table->string('transaction_ref')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('delivered_at')->nullable();

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
        Schema::dropIfExists('orders');
    }
}
