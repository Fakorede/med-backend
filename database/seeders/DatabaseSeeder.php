<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
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
        ]);

        User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@test.com',
            'role_id' => 1,
            'password' => Hash::make('MedAdmin0621')
        ]);

        User::factory()->create([
            'first_name' => 'Rider',
            'last_name' => 'User',
            'email' => 'rider@test.com',
            'role_id' => 2,
            'password' => Hash::make('TestRider0621')
        ]);

        User::factory()->create([
            'first_name' => 'User',
            'last_name' => 'User',
            'email' => 'user@test.com',
            'role_id' => 3,
            'password' => Hash::make('TestUser0621')
        ]);

        // User::factory(50)->unverified()->create();
        // User::factory(300)->create();
    }
}
