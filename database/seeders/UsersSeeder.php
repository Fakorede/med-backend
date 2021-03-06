<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'first_name' => 'Admin',
                'last_name' => 'User',
                'email' => 'admin@magicexpressdelivery.com',
                'email_verified_at' => now(),
                'phone_number' => '+14231929985',
                'role_id' => 1,
                'password' => Hash::make('MedAdmin0621'),
                'created_at' => now(),
            ],
            [
                'first_name' => 'Rider',
                'last_name' => 'User',
                'email' => 'rider@test.com',
                'email_verified_at' => now(),
                'phone_number' => '+14231929986',
                'role_id' => 2,
                'password' => Hash::make('MedRider0621'),
                'created_at' => now(),
            ],
            [
                'first_name' => 'User',
                'last_name' => 'User',
                'email' => 'user@test.com',
                'email_verified_at' => now(),
                'phone_number' => '+14231929987',
                'role_id' => 3,
                'password' => Hash::make('MedUser0621'),
                'created_at' => now(),
            ],
        ]);
    }
}
