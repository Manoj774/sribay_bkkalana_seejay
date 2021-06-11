<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{

    /**
     * Store a newly register User in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'phone_number' => 'required|max:50',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $data = $request->only(['first_name','last_name', 'phone_number' , 'email', 'password']);
        $data['password'] = bcrypt($data['password']);

        $user = new User($data);

        if (!$user->save()){
            return response()->json(['message' => 'Register failed. Internal Server Error'],500 );
        }

        return response()->json(['token' => $user->createToken('user-token')->plainTextToken,'role'=>$user->role,'user'=>$user]);
    }

}
