<?php

use Hashids\Hashids;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Route::get('/category',[CategoryController::class,'index']);
//
//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/aff.click/{product}/{user}',function ($id,$user){
//    $h = new Hashids('',5);
//    $userId = $h->decode($user)[0];
//    $productId =  $h->decode($id)[0];
    return redirect('/product-detail/'.$id.'/'.$user);
    //print_r($userId);
});

Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');

