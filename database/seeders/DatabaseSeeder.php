<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RolesSeeder::class,
            UsersSeeder::class,
        ]);

        DB::table('app_charges')->insert([
            [
                'dispatch_base_price' => 0, 
                'dispatch_price_per_km' => 0, 
                'errand_base_price' => 0, 
                'errand_price_per_km' => 0, 
                'created_at' => now(), 
                'updated_at' => now()
            ],
        ]);

        // User::factory(50)->unverified()->create();
        // User::factory(300)->create();
    }
}
