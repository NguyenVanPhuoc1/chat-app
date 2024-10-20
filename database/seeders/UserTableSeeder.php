<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(30)->create();

        User::first()->update([
            'email' => 'nguyenvanphuoc031123@gmail.com',
            'name' => 'Nguyễn Văn Phước',
        ]);
    }
}