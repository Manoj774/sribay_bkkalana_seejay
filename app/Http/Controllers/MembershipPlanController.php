<?php

namespace App\Http\Controllers;

use App\Models\MembershipPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            'no_of_link_click_per_day' => 'required|numeric',
            'task_rewards' => 'required|numeric',
            'total_reward_per_day' => 'required|numeric',
            'bonus_rewards' => 'required|numeric',
        ]);

        $membershipPlan = new MembershipPlan([
            'name' => $request->name,
            'price' => $request->price,
            'no_of_link_click_per_day' => $request->no_of_link_click_per_day,
            'task_rewards' => $request->task_rewards,
            'total_reward_per_day' => $request->total_reward_per_day,
            'bonus_rewards' => $request->bonus_rewards,
            'daily_income' => $request->daily_income,
            'weekly_income' => $request->weekly_income,
            'monthly_income' => $request->monthly_income,
            'monthly_income_with_bonus' => $request->monthly_income_with_bonus,
            'annual_revenue' => $request->annual_revenue,

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
        $request->validate([
            'name' => 'required|unique:categories|max:250',
            'price' => 'required|numeric',
            'no_of_link_click_per_day' => 'required|numeric',
            'task_rewards' => 'required|numeric',
            'total_reward_per_day' => 'required|numeric',
            'bonus_rewards' => 'required|numeric',
        ]);

        $membershipPlan = MembershipPlan::find($id);
        if (!$membershipPlan) {
            return response()->json(['message' => 'Membership plan not found'], 404);
        }
        $membershipPlan->name = $request->name;
        $membershipPlan->price = $request->price;
        $membershipPlan->no_of_link_click_per_day = $request->no_of_link_click_per_day;
        $membershipPlan->task_rewards = $request->task_rewards;
        $membershipPlan->total_reward_per_day = $request->total_reward_per_day;
        $membershipPlan->bonus_rewards = $request->bonus_rewards;
        $membershipPlan->daily_income = $request->daily_income;
        $membershipPlan->weekly_income = $request->weekly_income;
        $membershipPlan->monthly_income = $request->monthly_income;
        $membershipPlan->monthly_income_with_bonus = $request->monthly_income_with_bonus;
        $membershipPlan->annual_revenue = $request->annual_revenue;

        if (!$membershipPlan->update()){
            return response()->json(['message' => 'Membership plan not update. Internal Server Error'], 500);
        }

        return response()->json(['message' => 'Membership plan has been updated'], 200);
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
