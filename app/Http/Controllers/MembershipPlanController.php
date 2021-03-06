<?php

namespace App\Http\Controllers;

use App\Models\MembershipPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MembershipPlanController extends Controller
{
    /**
     * Display a listing of the membership plans.
     *
     * @return Response json
     */
    public function index()
    {
        $membershipPlans = DB::table('membership_plans')
            ->groupBy('membership_plans.id')
            ->get();
        if (!$membershipPlans) {
            return response()->json(['message' => 'Membership Plans not found'], 404);
        }
        return response()->json(['membershipPlans' => $membershipPlans], 200);
    }

    /**
     * Store a newly created membership plan in database.
     *
     * @param Request $request
     * @return Response json
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories|max:250',
            'price' => 'required|numeric',
            'value_for_point' => 'required|numeric',
            'no_of_link_click_per_day' => 'required|numeric',
            'task_rewards' => 'required|numeric',
            'total_reward_per_day' => 'required|numeric',
            'bonus_rewards' => 'required|numeric',
            'registered_commission' => 'required|numeric',
            'referral_commission' => 'required|numeric',
        ]);

        $membershipPlan = new MembershipPlan([
            'name' => $request->name,
            'price' => $request->price,
            'value_for_point' => $request->valueForPoint,
            'no_of_link_click_per_day' => $request->no_of_link_click_per_day,
            'task_rewards' => $request->task_rewards,
            'total_reward_per_day' => $request->total_reward_per_day,
            'bonus_rewards' => $request->bonus_rewards,
            'daily_income' => $request->daily_income,
            'weekly_income' => $request->weekly_income,
            'monthly_income' => $request->monthly_income,
            'monthly_income_with_bonus' => $request->monthly_income_with_bonus,
            'annual_revenue' => $request->annual_revenue,
            'registered_commission' => $request->registered_commission,
            'referral_commission' => $request->referral_commission,
        ]);

        if (!$membershipPlan->save()){
            return response()->json(['message' => 'Membership Plan not created. Internal Server Error'],500 );
        }
        return response()->json(['message' => 'Membership Plan has been created'],201 );
    }


    /**
     * Edit the specified membership plan.
     *
     * @param int $id
     * @return Response json
     */
    public function edit($id)
    {
        $membershipPlan = DB::table('membership_plans')
            ->where('id', $id)->first();

        if (!$membershipPlan) {
            return response()->json(['message' => 'Membership Plan not found'], 404);
        }

        return response()->json(['membershipPlan' => $membershipPlan], 200);
    }

    /**
     * Update the specified membership plan in database.
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $validator =  Validator::make($request->all(),[
            'name' => 'required|unique:categories|max:250',
            'price' => 'required|numeric',
            'value_for_point' => 'required|numeric',
            'no_of_link_click_per_day' => 'required|numeric',
            'task_rewards' => 'required|numeric',
            'total_reward_per_day' => 'required|numeric',
            'bonus_rewards' => 'required|numeric',
            'registered_commission' => 'required|numeric',
            'referral_commission' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all()], 401);
        }

        $membershipPlan = MembershipPlan::find($id);
        if (!$membershipPlan) {
            return response()->json(['message' => 'Membership plan not found'], 404);
        }
        $membershipPlan->name = $request->name;
        $membershipPlan->price = $request->price;
        $membershipPlan->value_for_point = $request->value_for_point;
        $membershipPlan->no_of_link_click_per_day = $request->no_of_link_click_per_day;
        $membershipPlan->task_rewards = $request->task_rewards;
        $membershipPlan->total_reward_per_day = $request->total_reward_per_day;
        $membershipPlan->bonus_rewards = $request->bonus_rewards;
        $membershipPlan->daily_income = $request->daily_income;
        $membershipPlan->weekly_income = $request->weekly_income;
        $membershipPlan->monthly_income = $request->monthly_income;
        $membershipPlan->monthly_income_with_bonus = $request->monthly_income_with_bonus;
        $membershipPlan->annual_revenue = $request->annual_revenue;
        $membershipPlan->registered_commission = $request->registered_commission;
        $membershipPlan->referral_commission = $request->referral_commission;

        if (!$membershipPlan->update()){
            return response()->json(['message' => 'Membership plan not update. Internal Server Error'], 500);
        }

        return response()->json(['message' => 'Membership plan has been updated'], 200);
    }

    public function storeWithdrawalDate(Request $request){
        $validator =  Validator::make($request->all(),[
            'withdrawal_date' => 'required|date',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->all()], 401);
        }
        $memberships = MembershipPlan::all();

        foreach ($memberships as $membership){
            $membership->withdrawal_date = $request->withdrawal_date;
            $membership->update();
        }

        return response()->json(['message' => 'Withdrawal date successfully created'], 200);

    }

    /**
     * destroy the specified membership plan in database.
     *
     *
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        $request->validate([
            'stat' => 'required'
        ]);
        $membershipPlan = MembershipPlan::find($id);
        if (!$membershipPlan) {
            return response()->json(['message' => 'Membership plan not found'], 404);
        }
        $membershipPlan->stat = $request->stat;
        if (!$membershipPlan->update()){
            return response()->json(['message' => 'Membership plan not disabled. Internal Server Error'], 500);
        }

        return response()->json(['message' => 'Membership plan has been disabled'], 200);

    }

}
