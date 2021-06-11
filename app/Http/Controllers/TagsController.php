<?php

namespace App\Http\Controllers;

use App\Models\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TagsController extends Controller
{

    /**
     * Display a listing of the tags.
     *
     * @return Response json
     */
    public function index()
    {
        $tags = DB::table('tags')
            ->select('id', 'tag_name')->get();

        return response()->json(['tags' => $tags], 200);
    }

    /**
     * Store a newly created Tags in storage.
     *
     * @param Request $request
     * @return Response json
     */
    public function create(Request $request)
    {
        $request->validate([
            'tag_name' => 'required|unique:tags|max:20'
        ]);

        $Tags = new Tags([
            'tag_name' => $request->tag_name,
        ]);

        if (!$Tags->save()){
            return response()->json(['message' => 'Tags not created. Internal Server Error'],500 );
        }
        return response()->json(['message' => 'Tags has been created'],201 );
    }

}
