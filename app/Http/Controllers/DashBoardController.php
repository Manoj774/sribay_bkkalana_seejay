<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashBoardController extends Controller
{
    public function index()
    {

        $dashBoardData = new \stdClass();

        $totalOrderIncome = Payment::where('order', '!=', null)->sum('amount');
        $totalOrders = Order::all()->count();
        $totalMembershipIncome = Payment::where('membership', '!=', null)->sum('amount');

        $currentMonthOrderIncome = Payment::where('order', '!=', null)
            ->whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])
            ->sum('amount');
        $currentMonthOrders = Order::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])->count();
        $currentMonthMembershipIncome = Payment::where('membership', '!=', null)
            ->whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()])
            ->sum('amount');;

        $totalMembers = User::where('role','=',3)->count();
        $totalCustomers = User::where('role','=',2)->count();
        $totalUniqueVisitors = DB::table('generate_link_clicks')
            ->groupBy('ip_address')
            ->count();

        $dashBoardData->totalOrderIncome = $totalOrderIncome;
        $dashBoardData->totalOrders = $totalOrders;
        $dashBoardData->totalMembershipIncome = $totalMembershipIncome;

        $dashBoardData->currentMonthOrderIncome = $currentMonthOrderIncome;
        $dashBoardData->currentMonthOrders = $currentMonthOrders;
        $dashBoardData->currentMonthMembershipIncome = $currentMonthMembershipIncome;

        $dashBoardData->totalMembers = $totalMembers;
        $dashBoardData->totalCustomers = $totalCustomers;
        $dashBoardData->totalUniqueVisitors = $totalUniqueVisitors;

        return response()->json(['dashboardData' => $dashBoardData], 200);

    }
}
