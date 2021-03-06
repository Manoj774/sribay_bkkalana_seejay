<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CustomerShippingAddress;
use App\Models\MemberEarnHistory;
use App\Models\MembershipPlan;
use App\Models\Payment;
use App\Models\User;
use App\Models\UserHasMemberShip;
use Carbon\Carbon;
use Hashids\Hashids;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
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
            ->whereNotIn('id', [Auth::id()])
            ->whereNotIn('role', [2,3])
            ->get();
        return response()->json(['users' => $users], 200);
    }


    /**
     * Display a listing of the customers.
     *
     * @return Response json
     */

    public function getCustomers()
    {
        $customers = DB::table('users')
            ->select('id','users.first_name','users.last_name','users.city','users.zip_code','users.email','users.created_at','users.stat')
            ->whereNotIn('role', [1,3])->get();

        $cus = array();

        foreach ($customers as $customer){
            $orders = DB::table('orders')
                ->where('user_id','=',$customer->id)
                ->count('id');
            $customer->orders = $orders;
            $cus[] = $customer;
        }

        return response()->json(['customers' => $cus], 200);
    }

    /**
     * Display a listing of the members.
     *
     * @return Response json
     */
    public function getMembers(){

        $members = DB::table('users')
            ->select('users.id','users.first_name','users.last_name','users.city',
                    'users.zip_code','users.email','users.created_at','users.stat','user_has_member_ships.membership_id',
                    'user_has_member_ships.account_amount','membership_plans.name AS membership','user_has_member_ships.stat AS affiliate_stat')
            ->join('user_has_member_ships','users.id','=','user_has_member_ships.user_id')
            ->join('membership_plans','user_has_member_ships.membership_id','=','membership_plans.id')
            ->whereNotIn('role', [1,2])->get();

        $mem = array();
        foreach ($members as $member){
            $orders = DB::table('orders')
                ->where('user_id','=',$member->id)
                ->count('id');
            $member_ship_payment = DB::table('payments')
                ->where('user_id','=',$member->id)
                ->where('membership','=',$member->membership_id)
                ->where('payment_method','=','Bank Payment')
                ->where('payment_stat','=',0)->first();
            $member->orders = $orders;
            $member->payment_details = $member_ship_payment;
            $mem[] = $member;
        }

        return response()->json(['members' => $mem], 200);
    }

    /**
     * Display a user shipping address.
     *
     * @return Response json
     */
    public function getUserShippingAddress()
    {
        $shipping_address = DB::table('customer_shipping_addresses')
            ->where('user_id', '=', [Auth::id()])->first();
        return response()->json(['shipping_address' => $shipping_address], 200);
    }

    public function updateBankInfo(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'bank_person_name' => 'required|max:100',
            'bank_account_number' => 'required|max:50',
            'bank_name' => 'required',
            'bank_branch' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all()], 401);
        }

        $bankDetails = UserHasMemberShip::where('user_id','=',$id)->first();

        $bankDetails->bank_person_name = $request->bank_person_name;
        $bankDetails->bank_account_number = $request->bank_account_number;
        $bankDetails->bank_name = $request->bank_name;
        $bankDetails->bank_branch = $request->bank_branch;

        if (!$bankDetails->update()) {
            return response()->json(['message' => 'Bank details not update. Internal Server Error'], 500);
        }
        return response()->json(['message' => "Bank details updated"], 201);

    }

    public function getMemberBankInfo($id){
        $bankDetails = UserHasMemberShip::where('user_id','=',$id)->first();
        return response()->json(['bankInfo' => $bankDetails], 200);
    }


    /**
     * Update or created customer shipping address in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function createUserShippingAddress(Request $request)
    {

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
            return response()->json(['message' => $validator->errors()->all()], 401);
        }
        $userShipping = CustomerShippingAddress::find($request->id);
        if (!$userShipping) {
            $userShipping = new CustomerShippingAddress([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone_number' => $request->phone_number,
                'address' => $request->address,
                'city' => $request->city,
                'state' => $request->state,
                'zip_code' => $request->zip_code,
                'user_id' => $request->user()->id
            ]);
            if (!$userShipping->save()) {
                return response()->json(['message' => 'Shipping Address not created. Internal Server Error'], 500);
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
        if (!$userShipping->update()) {
            return response()->json(['message' => 'Shipping address not update. Internal Server Error'], 500);
        }
        return response()->json(['shipping_address' => $userShipping], 200);

    }

    public function createMembershipUser(Request $request)
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
            return response()->json(['message' => $validator->errors()->all()], 401);
        }

        $h = new Hashids('', 5);
        $data = $request->only(['first_name', 'last_name', 'phone_number', 'email', 'password', 'referral_id']);
        $data['password'] = bcrypt($data['password']);
        if (isset($data['referral_id'])){
            $data['referral_id'] = $h->decode($data['referral_id'])[0];
        }

        $user = new User($data);

        if (!$user->save()) {
            return response()->json(['message' => 'Register failed. Internal Server Error'], 500);
        }

//        if(!Auth::attempt($request->only('email','password'))){
//            return response()->json([
//                'status' => 401,
//                'message' => "Unauthorized"
//            ],401);
//        }
//        $user = User::where("email",$request->email)->first();
//        $token = $user->createToken('user-token')->plainTextToken;
//        Arr::add($user,'token',$token);
        return response()->json(['user' => $user], 200);
//        return response()->json(['token' =>  $token,'role'=> $user->role,'user'=> $user],200);
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
            'amount' => 'required',
            'payment_stat' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all()], 401);
        }

        if ($request->payment_method == "CARD"){
            $validator = Validator::make($request->all(), [
                'card_number' => 'required',
                'received_date' => 'required',
                'transaction_id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()->all()], 401);
            }
        }

        if ($request->payment_method == "Bank Payment"){
            $validator = Validator::make($request->all(), [
                'bank_slip' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->errors()->all()], 401);
            }
        }

        $payment = new Payment([
            'payment_stat' => $request->payment_stat,
            'payment_method' => $request->payment_method,
            'amount' => $request->amount,
            'membership' => $request->subscription_plan,
            'user_id' => $request->user,
        ]);


        if ($request->payment_method == "CARD"){

            $payment->transaction_id = $request->transaction_id;
            $payment->card_no = $request->card_number;
            $payment->received_date = $request->received_date;
        }

        if ($request->payment_method == "Bank Payment"){
            $courseImage = '';
            $destinationPath = '';
            $image_path = '';
            if ($image = $request->file('bank_slip')) {
                $destinationPath = public_path('images/payment_slip/');
                $paymentSlipImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
                $image->move($destinationPath, $paymentSlipImage);
                $image_path = '/images/payment_slip/' . $paymentSlipImage;
            }
            $payment->payment_slip = $image_path;
        }


        if ($payment->save()) {

            $membership = MembershipPlan::find($request->subscription_plan);

            $userHasMembership = UserHasMemberShip::where('user_id','=',$request->user)->first();

            if ($userHasMembership){

                $userHasMembership->membership_id = $request->subscription_plan;
                $userHasMembership->account_amount = ($userHasMembership->account_amount + $membership->registered_commission);
                if ($request->payment_method == "Bank Payment"){
                    $userHasMembership->stat = false;
                }
                if (!$userHasMembership->update()) {
                    return response()->json(['message' => 'User Membership update failed. Internal Server Error'], 500);
                }
            }

            if (!$userHasMembership){
                $userHasMembership = new UserHasMemberShip([
                    'user_id' => $request->user,
                    'membership_id' => $request->subscription_plan,
                    'account_amount' => $membership->registered_commission,
                ]);
                if ($request->payment_method == "Bank Payment"){
                    $userHasMembership->stat = false;
                }
                if (!$userHasMembership->save()) {
                    return response()->json(['message' => 'User Membership create failed. Internal Server Error'], 500);
                }
            }

            $memberEarn = new MemberEarnHistory([
                'user_id' => $request->user,
                'earn_amount' => $membership->registered_commission,
                'description' => 'Registered Commission',
            ]);

            if (!$memberEarn->save()){
                Log::error('Member Earn not update. Internal Server Error');
            }

            $user = User::find($request->user);
            $user->role = 3;

            if (!$user->update()) {
                return response()->json(['message' => 'User role not update. Internal Server Error'], 500);
            }

            if ($user->referral_id && $request->payment_method == "CARD"){

                $userHasMembership = UserHasMemberShip::where('user_id','=',$user->referral_id)->first();

                if ($userHasMembership){
                    $userHasMembership->account_amount = $userHasMembership->account_amount + $membership->referral_commission;
                    if (!$userHasMembership->update()) {
                        return response()->json(['message' => 'User role not update. Internal Server Error'], 500);
                    }

                    $memberEarn = new MemberEarnHistory([
                        'user_id' => $user->referral_id,
                        'earn_amount' => $membership->referral_commission,
                        'description' => 'Referral Registered Commission',
                    ]);

                    if (!$memberEarn->save()){
                        Log::error('Member Earn not update. Internal Server Error');
                    }

                }

            }
            if ($request->payment_method == "Bank Payment"){
                return response()->json(['message' => 'Membership purchasing successfully. Pending Approval.'], 200);
            }
            return response()->json(['message' => 'Membership purchasing successfully'], 200);
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
            return response()->json(['message' => $validator->errors()->all()], 401);
        }

        $user = new User([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => 1
        ]);

        if (!$user->save()) {
            return response()->json(['message' => 'User not created. Internal Server Error'], 500);
        }
        return response()->json(['message' => 'User has been created'], 201);

    }


    /**
     * update User data in storage.
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
            return response()->json(['message' => $validator->errors()->all()], 401);
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
        $user->city = $request->city;
        $user->state = $request->state;
        $user->zip_code = $request->zip_code;

        if (!$user->update()) {
            return response()->json(['message' => 'User not updated. Internal Server Error'], 500);
        }
        return response()->json(['message' => 'User has been updated'], 201);

    }


    /**
     * Display a specific user by user object.
     *
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(User $user)
    {
        return response()->json($user);
    }


    public function getAffiliateDashboardData(Request $request)
    {

        $currentMonthStart = Carbon::now()->startOfMonth()->toDateString();
        $currentMonthEnd = Carbon::now()->endOfMonth()->toDateString();
        $lastMonthStart = Carbon::now()->subMonth()->startOfMonth()->toDateString();
        $lastMonthEnd = Carbon::now()->subMonth()->endOfMonth()->toDateString();

        $currentMonthCommission = DB::table('member_earn_histories')
            ->where('user_id', '=', $request->user()->id)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->sum('earn_amount');


        $lastMonthCommission = DB::table('member_earn_histories')
            ->where('user_id', '=', $request->user()->id)
            ->whereBetween('created_at', [$lastMonthStart, $lastMonthEnd])
            ->sum('earn_amount');


        $accountBalance = DB::table('user_has_member_ships')
            ->select('user_has_member_ships.account_amount','membership_plans.task_rewards AS membership_task_rewards','membership_plans.name AS membership_name','membership_id','user_has_member_ships.id AS userHasMembershipId','user_has_member_ships.stat AS affiliate_activate')
            ->join('membership_plans','membership_plans.id','=','user_has_member_ships.membership_id')
            ->where('user_id', '=', $request->user()->id)
            ->first();

        $memberPoint =DB::table('generate_link_clicks')
            ->where('user_id','=',$request->user()->id)
            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('ip_address')
            ->get();

        $weekly_points = count($memberPoint) * $accountBalance->membership_task_rewards;

        $generateLinkTotalUniqueClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->groupBy('ip_address')
            ->get()
            ->count();

        $generateLinkTotalClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->get()
            ->count();

        $generateLinkTotalDesktopClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->where('user_agent', '=', 'Desktop')
            ->get()
            ->count();

        $generateLinkTotalMobileClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->where('user_agent', '=', 'Mobile')
            ->get()
            ->count();

        $generateLinkTotalTabletClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->where('user_agent', '=', 'Tablet')
            ->get()
            ->count();

        $generateLinkTotalOtherClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', $request->user()->id)
            ->where('user_agent', '=', 'Other')
            ->get()
            ->count();

        $earnHistory = DB::table('member_earn_histories')
            ->where('user_id', '=', $request->user()->id)
            ->get();


        $referrals = DB::table('users')
            ->select('id','users.first_name','users.last_name','email','created_at')
            ->where('referral_id', '=', $request->user()->id)
            ->get();

        $referralsData = array();

        foreach ($referrals as $referral){

            $referralMembership = DB::table('user_has_member_ships')
                ->select('membership_plans.name AS membership_name')
                ->join('membership_plans','user_has_member_ships.membership_id','=','membership_plans.id')
                ->where('user_id', '=', $referral->id)
                ->first();

//            $referralEarnCommission = DB::table('member_earn_histories')
//                ->where('description', '!=','Registered Commission')
//                ->where('description', '!=','Weekly Reward')
//                ->where('user_id', '=', $referral->id)
//                ->sum('earn_amount');
//
//            $lastEarnCommissionDate = DB::table('member_earn_histories')
//                ->select('created_at AS last_commission_date')
//                ->where('description', '!=','Weekly Reward')
//                ->where('description', '!=','Registered Commission')
//                ->where('user_id', '=', $referral->id)
//                ->orderByDesc('created_at')
//                ->first();

            $referral->referralMembership = $referralMembership != null ? $referralMembership->membership_name : '';
//            $referral->referralEarnCommission = $referralEarnCommission;
//            $referral->lastEarnCommissionDate = isset($lastEarnCommissionDate->last_commission_date) ? $lastEarnCommissionDate->last_commission_date : null;

            $referralsData[] = $referral;

        }

        $affiliateUserData = [
            'currentMonthCommission' => $currentMonthCommission,
            'lastMonthCommission' => $lastMonthCommission,
            'membership_name' => $accountBalance->membership_name,
            'userHasMembershipID' => $accountBalance->userHasMembershipId,
            'affiliate_activate' => $accountBalance->affiliate_activate,
            'accountBalance' => $accountBalance->account_amount,
            'generateLinkTotalUniqueClick' => $generateLinkTotalUniqueClick,
            'generateLinkTotalClick' => $generateLinkTotalClick,
            'generateLinkTotalDesktopClick' => $generateLinkTotalDesktopClick,
            'generateLinkTotalMobileClick' => $generateLinkTotalMobileClick,
            'generateLinkTotalTabletClick' => $generateLinkTotalTabletClick,
            'generateLinkTotalOtherClick' => $generateLinkTotalOtherClick,
            'weeklyPoints' => $weekly_points,
            'earnHistory' => $earnHistory,
            'referral' => $referralsData
        ];

        return response()->json($affiliateUserData);

    }

    public function changeUserStatus(Request $request){
        $user = User::find($request->id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->stat = $request->status;
        if (!$user->update()){
            return response()->json(['message' => 'User status update failed. Internal Server Error'], 500);
        }
        return response()->json(['message' => 'User status has been updated'], 201);
    }

    public function changeMemberAffiliateStatus(Request $request){
        $userHasMembership = DB::table('user_has_member_ships')->where('user_id','=',$request->id)->first();
        $userHasMembershipStatus = UserHasMemberShip::find($userHasMembership->id);
        if (!$userHasMembershipStatus) {
            return response()->json(['message' => 'Member not found'], 404);
        }
        $userHasMembershipStatus->stat = $request->status;
        if (!$userHasMembershipStatus->update()){
            return response()->json(['message' => 'Member affiliate status update failed. Internal Server Error'], 500);
        }
        return response()->json(['message' => 'User affiliate status has been updated'], 201);
    }

    public function getGenerateReferralLink(Request $request){
        $hash = new Hashids('', 5);
        $url = url('/session/register') . "/" . $hash->encode($request->user()->id) . "";
        return response()->json(['referralLink' => urlencode($url)], 200);
    }


}
