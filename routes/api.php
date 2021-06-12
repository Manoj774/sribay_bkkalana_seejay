<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MembershipPlanController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ShoppingCartController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//auth
Route::post('login', [LoginController::class,'login'])->middleware('throttle:api');
Route::post('logout', [LoginController::class,'logOut'])->middleware('auth:sanctum');
Route::post('register', [RegisterController::class,'register']);

//product
Route::get('/product',[ProductController::class,'index']);
Route::get('/product/feature-products',[ProductController::class,'getFeaturesProduct']);
Route::get('/product/filter', [ProductController::class,'search']);
Route::get('/product/{id}',[ProductController::class,'show']);
Route::get('/product-by-category/{id}',[ProductController::class,'productsByCategory']);
Route::post('/product/link-generate',[ProductController::class,'productsAffiliateLink']);
Route::get('/product/{product}/{user}',[ProductController::class,'show']);


//shopping cart
Route::post('/cart/add-to-cart',[ShoppingCartController::class,'store']);
Route::post('/cart/update-cart',[ShoppingCartController::class,'update']);
Route::get('/cart/get-cart-items',[ShoppingCartController::class,'index']);
Route::delete('/cart/remove-cart-item/{id}',[ShoppingCartController::class,'destroyCartItem']);
Route::delete('/cart/remove-all-item/',[ShoppingCartController::class,'destroy']);


// membership
Route::get('/membership',[MembershipPlanController::class,'index']);
Route::post('/users/register-membership',[UserController::class,'registerMembership']);
Route::post('/users/create-member-user', [UserController::class,'createMembershipUser']);
//category
Route::get('/category',[CategoryController::class,'index']);
Route::get('/category/tree-view',[CategoryController::class,'getCategoryForTreeView']);
Route::get('/category/tree-select',[CategoryController::class,'getCategoriesForTreeSelect']);





Route::middleware('auth:sanctum')->get('/user/profile', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/users',[UserController::class,'index']);
    Route::get('/users/shipping-address',[UserController::class,'getUserShippingAddress']);
    Route::post('/users/create-shipping-address',[UserController::class,'createUserShippingAddress']);
    Route::post('/users/create',[UserController::class,'create']);
    Route::put('/users/{id}',[UserController::class,'update']);


    Route::post('/orders/create',[OrderController::class,'create']);



    Route::get('/category/only-sub-categories/{id}',[CategoryController::class,'onlySubCategoriesByParent']);
    // Route::get('/category/filter', [CategoryController::class,'search']);
    // Route::get('/category/all', [CategoryController::class,'all']);
    Route::post('/category/create', [CategoryController::class,'create']);
    Route::get('/category/{id}',[CategoryController::class,'show']);
    Route::get('/category/{id}/edit',[CategoryController::class,'edit']);
    Route::put('/category/{id}',[CategoryController::class,'update']);
    // Route::delete('/category/{id}',[CategoryController::class,'destroy']);


    //admin product
    Route::post('/product/create', [ProductController::class,'create']);
    Route::get('/product/{id}/edit',[ProductController::class,'edit']);
    Route::put('/product/{id}',[ProductController::class,'update']);
    Route::delete('/category/{id}',[CategoryController::class,'destroy']);

    //admin membership plan
    //// Route::get('/membership/filter', [MembershipPlanController::class,'search']);
    //// Route::get('/membership/all', [MembershipPlanController::class,'all']);
    Route::post('/membership/create', [MembershipPlanController::class,'create']);
    //Route::get('/membership/{id}',[MembershipPlanController::class,'show']);
    Route::get('/membership/{id}/edit',[MembershipPlanController::class,'edit']);
    Route::put('/membership/{id}',[MembershipPlanController::class,'update']);
    Route::delete('/membership/{id}',[MembershipPlanController::class,'destroy']);
});


