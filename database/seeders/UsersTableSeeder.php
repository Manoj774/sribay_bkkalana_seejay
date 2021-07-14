<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->first_name = "Admin";
        $user->last_name = "Dev";
        $user->email = "admin@dev.com";
        $user->password = bcrypt('dev123');
		$user->role = 3;
		$user->stat = true;
        $user->save();
    }
}
