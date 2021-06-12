<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CustomerShippingAddress;
use App\Models\Payment;
use App\Models\User;
use App\Models\UserHasMemberShip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the user.
     *
     * @return Response json
     */
    public function index()
    {
        $users = DB::table('users')
            ->whereNotIn('id',[Auth::id()])->get();
        return response()->json(['users' => $users], 200);
    }

    /**
     * Display a user shipping address.
     *
     * @return Response json
     */
    public function getUserShippingAddress(){
        $shipping_address = DB::table('customer_shipping_addresses')
            ->where('user_id','=',[Auth::id()])->first();
        return response()->json(['shipping_address' => $shipping_address], 200);
    }

    /**
     * Update or created customer shipping address in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function createUserShippingAddress(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required|email',
            'phone_number' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'zip_code' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $userShipping = CustomerShippingAddress::find($request->id);
        if (!$userShipping){
            $userShipping = new CustomerShippingAddress([
                'first_name'=> $request->first_name,
                'last_name'=> $request->last_name,
                'email'=> $request->email,
                'phone_number'=> $request->phone_number,
                'address'=> $request->address,
                'city'=> $request->city,
                'state'=> $request->state,
                'zip_code'=> $request->zip_code,
                'user_id'=>$request->user()->id
            ]);
            if (!$userShipping->save()){
                return response()->json(['message' => 'Shipping Address not created. Internal Server Error'],500 );
            }
            return response()->json(['shipping_address' => $userShipping], 200);
        }
        $userShipping->first_name = $request->first_name;
        $userShipping->last_name = $request->last_name;
        $userShipping->email = $request->email;
        $userShipping->phone_number = $request->phone_number;
        $userShipping->address = $request->address;
        $userShipping->city = $request->city;
        $userShipping->state = $request->state;
        $userShipping->zip_code = $request->zip_code;
        if (!$userShipping->update()){
            return response()->json(['message' => 'Shipping address not update. Internal Server Error'],500 );
        }
        return response()->json(['shipping_address' => $userShipping], 200);

    }

    /**
     * Store a newly register as member in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function registerMembership(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'user' => 'required',
            'subscription_plan' => 'required',
            'payment_method' => 'required',
            'card_number' => 'required',
            'received_date' => 'required',
            'transaction_id' => 'required',
            'amount' => 'required',
            'payment_stat' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $payment = new Payment([
            'payment_stat'=> $request->payment_stat,
            'payment_method'=> $request->payment_method,
            'amount'=> $request->amount,
            'transaction_id'=> $request->transaction_id,
            'card_no'=> $request->card_number,
            'received_date'=> $request->received_date,
            'membership'=> $request->subscription_plan,
            'user_id'=> $request->user,
        ]);

        if ($payment->save()){
            $userHasMembership = new UserHasMemberShip([
                'user_id'=> $request->user,
                'membership_id'=> $request->subscription_plan,
            ]);
            if ($userHasMembership->save()){
                $user = User::find($request->user);
                $user->role = 3;
                if (!$user->update()){
                    return response()->json(['message' => 'User role not update. Internal Server Error'], 500);
                }
                return response()->json(['message' => 'Membership purchasing successfully'], 200);
            }
            return response()->json(['message' => 'User Membership update failed. Internal Server Error'], 500);
        }
        return response()->json(['message' => 'Payment update failed. Internal Server Error'], 500);
    }

    /**
     * Store a newly register as member error in storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function registerMembershipError(Request $request)
    {



    }






    /**
     * Store a newly created Admin User in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'confirmPassword' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $user = new User([
            'first_name'=> $request->first_name,
            'last_name'=> $request->last_name,
            'email'=> $request->email,
            'password'=> bcrypt($request->password),
            'is_admin'=> $request->is_admin
        ]);

        if (!$user->save()){
            return response()->json(['message' => 'User not created. Internal Server Error'],500 );
        }
        return response()->json(['message' => 'User has been created'],201 );

    }


    /**
     * Store a newly update User data in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required',
            'phone_number' => 'required',
            'address' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $user = User::find($request->user()->id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->phone_number = $request->phone_number;
        $user->profile_picture = $request->profile_picture;
        $user->address = $request->address;

        if (!$user->update()){
            return response()->json(['message' => 'User not updated. Internal Server Error'],500 );
        }
        return response()->json(['message' => 'User has been updated'],201 );

    }


    /**
     * Logout form system.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::logout();
        return response()
            ->json([
                'logout' => true
            ]);
    }


    /**
     * Display a specific user by user object.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(User $user)
    {
        return response()->json($user);
    }


    public function showOrders(User $user)
    {
        return response()->json($user->orders()->with(['product'])->get());
    }
}
