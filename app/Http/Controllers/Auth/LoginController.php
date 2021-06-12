<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    /**
     * login user
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required"
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 400,'message' => $validator],400);
        }

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['status' => 401,'message' => "Username or Password is incorrect"],401);
        }

        $user = User::where("email",$request->email)->first();
        $token = $user->createToken('user-token')->plainTextToken;
        Arr::add($user,'token',$token);
        return response()->json(['token' =>  $token,'role'=> $user->role,'user'=> $user],200);

    }


    /**
     * Logout form system.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function logOut(Request $request)
    {
        // $user = $request->user();
        // $user->currentAccessToken()->delete();
        return response()->json(['msg' => 'Logout Successful'],200);
    }

}
