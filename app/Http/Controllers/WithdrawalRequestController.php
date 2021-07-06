<?php

namespace App\Http\Controllers;

use App\Models\UserHasMemberShip;
use App\Models\WithdrawalRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WithdrawalRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $withdrawalRequests = DB::table('withdrawal_requests')
            ->select('withdrawal_requests.*', DB::raw('CONCAT(users.first_name," ",users.last_name) AS full_name'))
            ->join('users','withdrawal_requests.user_id','=','users.id')
            ->where('withdrawal_requests.request_status', '=', 0)
            ->get();
        return response()->json(['requests' => $withdrawalRequests], 200);
    }


    public function filterRequest(Request $request){

        $dateFrom = $request->dateFrom;
        $dateTo = $request->dateTo;
        $status= $request->status;

        $sql  = 'SELECT withdrawal_requests.*,CONCAT(users.first_name," ",users.last_name) AS full_name';
        $sql .= ' FROM withdrawal_requests';
        $sql .= ' INNER JOIN `users` ON `withdrawal_requests`.`user_id` = `users`.`id` ';
        $sql .= ' WHERE `withdrawal_requests`.`request_status`="'.$status.'"';
        if ($dateTo != null && $dateTo != ''){
            $sql .= ' AND withdrawal_requests.created_at between "'.$dateFrom.'" and "'.$dateTo.'"';
        }

        $withdrawalRequests =  DB::select($sql);

        return response()->json(['requests' => $withdrawalRequests], 200);

    }

    public function getPendingRequestExportData(){

        $withdrawalRequests = DB::table('withdrawal_requests')
            ->select('withdrawal_requests.request_number','withdrawal_requests.request_amount','users.id AS member_id',
                DB::raw('CONCAT(users.first_name," ",users.last_name) AS full_name'),'user_has_member_ships.bank_person_name'
                ,'user_has_member_ships.bank_account_number','user_has_member_ships.bank_name','user_has_member_ships.bank_branch')
            ->join('user_has_member_ships','withdrawal_requests.user_has_membership_id','=','user_has_member_ships.id')
            ->join('users','withdrawal_requests.user_id','=','users.id')
            ->where('withdrawal_requests.request_status', '=', 0)
            ->get();
        return response()->json(['requests' => $withdrawalRequests], 200);
    }


    public function getUserHistory(){

        $withdrawalRequests = DB::table('withdrawal_requests')
            ->where('user_id', '=', Auth::user()->id)
            ->get();

        return response()->json(['withdrawalHistory' => $withdrawalRequests], 200);
    }




    public function checkAvailable()
    {

        $generateLinkClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', Auth::user()->id)
            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('ip_address')
            ->get();

        if (count($generateLinkClick) >= 35) {

            $withdrawalRequests = DB::table('withdrawal_requests')
                ->where('user_id', '=', Auth::user()->id)
                ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->first();
            if (!$withdrawalRequests) {
                return response()->json(['check' => true], 200);
            }
            return response()->json(['check' => false], 200);
        }
        return response()->json(['check' => false], 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $generateLinkClick = DB::table('generate_link_clicks')
            ->where('user_id', '=', Auth::user()->id)
            ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
            ->groupBy('ip_address')
            ->get();

        if (count($generateLinkClick) >= 35) {

            $withdrawalRequests = DB::table('withdrawal_requests')
                ->where('user_id', '=', Auth::user()->id)
                ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->first();
            if (!$withdrawalRequests) {
                $request->validate([
                    'userMembership' => 'required',
                    'withdrawalAmount' => 'required'
                ]);

                $withdrawalRequest = new WithdrawalRequest([
                    'user_id' => Auth::user()->id,
                    'user_has_membership_id' => $request->userMembership,
                    'request_number' => $this->generateRequestNumber(10),
                    'request_amount' => $request->withdrawalAmount,
                    'request_status' => 0,
                ]);

                if ($withdrawalRequest->save()){
                    return response()->json(['message' => "Request send successful.."], 200);
                }
            }
            return response()->json(['message' => "Request send failed.."], 500);
        }
        return response()->json(['message' => "Request send failed.."], 500);
    }

    private function generateRequestNumber($number)
    {
        // Generate set of alpha characters
        $alpha = array();
        for ($u = 65; $u <= 90; $u++) {
            // Uppercase Char
            array_push($alpha, chr($u));
        }

         for ($l = 97; $l <= 122; $l++) {
            // Lowercase Char
            array_push($alpha, chr($l));
         }

        // Get random alpha character
        $rand_alpha_key = array_rand($alpha);
        $rand_alpha = $alpha[$rand_alpha_key];

        // Add the other missing integers
        $rand = array($rand_alpha);
        for ($c = 0; $c < $number - 1; $c++) {
            array_push($rand, mt_rand(0, 9));
            shuffle($rand);
        }

        return implode('', $rand);

    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return void
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @return void
     */
    public function update()
    {
        $withdrawalRequests = DB::table('withdrawal_requests')
            ->where('withdrawal_requests.request_status', '=', 0)
            ->get();

        foreach ($withdrawalRequests as $withdrawalRequest){

            $userMemberShip = UserHasMemberShip::find($withdrawalRequest->user_has_membership_id);
            $userMemberShip->account_amount = 0.0;
            if ($userMemberShip->update()){

                $withdrawalRequestUpdate = WithdrawalRequest::find($withdrawalRequest->id);
                $withdrawalRequestUpdate->request_status = 1;

                if (!$withdrawalRequestUpdate->update()){
                    return response()->json(['message' => "Requests status update failed.."], 500);
                }

            }else{
                return response()->json(['message' => "Requests status update failed.."], 500);
            }

        }

        return response()->json(['message' => "Requests status update success.."], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return void
     */
    public function destroy($id)
    {
        //
    }
}
