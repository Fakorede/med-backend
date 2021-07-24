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

            // $table->point('pickup_location')->nullable();
            $table->double('pickup_location_longitude')->nullable();
            $table->double('pickup_location_latitude')->nullable();
            // $table->point('dropoff_location')->nullable();
            $table->double('dropoff_location_longitude')->nullable();
            $table->double('dropoff_location_latitude')->nullable();
            $table->text('pickup_address')->nullable();
            $table->text('dropoff_address')->nullable();
            $table->string('sender_name')->nullable();
            $table->string('sender_mobile')->nullable();
            $table->string('receiver_name')->nullable();
            $table->string('receiver_mobile')->nullable();
            $table->text('delivery_note')->nullable();
            
            $table->string('tracking_number');
            $table->string('order_status')->nullable();
            $table->enum('order_type', ['Dispatch', 'Errand']);
            $table->enum('payment_method', ['Paystack', 'Pay On Delivery']);
            $table->enum('personnel_option', ['Sender', 'Receiver', 'Third-party']);

            $table->string('payment_status')->default('Not Paid');
            $table->boolean('payment_verified')->default(false);
            $table->string('transaction_ref')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('delivered_at')->nullable();

            $table->softDeletes();
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
