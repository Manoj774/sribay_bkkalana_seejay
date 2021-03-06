<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Hashids\Hashids;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
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

        $h = new Hashids('', 5);
        $data = $request->only(['first_name', 'last_name', 'phone_number', 'email', 'password', 'referral_id']);
        $data['password'] = bcrypt($data['password']);
        if (isset($data['referral_id'])){
            $data['referral_id'] = $h->decode($data['referral_id'])[0];
        }
        $user = new User($data);

        if (!$user->save()){
            return response()->json(['message' => 'Register failed. Internal Server Error'],500 );
        }

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json([
                'status' => 401,
                'message' => "Unauthorized"
            ],401);
        }
        $user = User::where("email",$request->email)->first();

        $loginController = new LoginController();
        if (!$loginController->addSessionCartDataToUser($request,$user)){
            Log::error('cart data adding failed..');
        }

        $token = $user->createToken('user-token')->plainTextToken;
        Arr::add($user,'token',$token);
       // return response()->json(['user'=> $user],200);
        return response()->json(['token' =>  $token,'role'=> $user->role,'user'=> $user],200);
    }

}
