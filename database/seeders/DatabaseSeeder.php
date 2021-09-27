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

        DB::table('settings')->insert([
            ['base_price' => 0, 'price_per_km' => 0, 'created_at' => now(), 'updated_at' => now()],
        ]);

        // User::factory(50)->unverified()->create();
        // User::factory(300)->create();
    }
}
