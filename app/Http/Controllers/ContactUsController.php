<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactUsController extends Controller
{

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'subject'=>'required',
            'message' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 400,'message' => $validator->errors()->all()],400);
        }

        $data['data'] = array(
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        );

        Mail::send('email',$data, function($message) use ($request){
            $message->from('kalananipun008@gmail.com');
            $message->to('corestak2021@gmail.com', 'Hello Admin')->subject($request->get('subject'));
        });
        return response()->json(['message' => "Thanks for contacting!"], 200);

    }

}
