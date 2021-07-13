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
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\DashBoardController;
use App\Http\Controllers\WithdrawalRequestController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;


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
Route::post('admin-sribay/admin-login', [LoginController::class,'sribayAdminLogin'])->middleware('throttle:api');
Route::post('logout', [LoginController::class,'logOut'])->middleware('auth:sanctum');
Route::post('register', [RegisterController::class,'register']);

Route::prefix('auth')->group(function () {

    // Send reset password mail
    Route::post('reset-password', [ForgotPasswordController::class,'sendPasswordResetLink']);

    // handle reset password form process
    Route::post('reset/password', [ResetPasswordController::class,'callResetPassword']);

});
//product
Route::get('/product',[ProductController::class,'index']);
Route::get('/product/feature-products',[ProductController::class,'getFeaturesProduct']);
Route::get('/product/count-down-product',[ProductController::class,'getCountDownProduct']);
Route::post('/product/filter', [ProductController::class,'getProductFilter']);
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


//contact us
Route::post('/contact-us',[ContactUsController::class,'create']);


Route::middleware('auth:sanctum')->get('/user/profile', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {

    Route::get('/dash-board',[DashBoardController::class,'index']);


    Route::get('/users',[UserController::class,'index']);
    Route::get('/users/customers',[UserController::class,'getCustomers']);
    Route::get('/users/members',[UserController::class,'getMembers']);
    Route::get('/users/shipping-address',[UserController::class,'getUserShippingAddress']);
    Route::post('/users/create-shipping-address',[UserController::class,'createUserShippingAddress']);
    Route::post('/users/create',[UserController::class,'create']);
    Route::put('/users/{id}',[UserController::class,'update']);
    Route::get('/users/affiliate',[UserController::class,'getAffiliateDashboardData']);
    Route::get('/users/referral-link',[UserController::class,'getGenerateReferralLink']);
    Route::post('/users/change-status',[UserController::class,'changeUserStatus']);
    Route::put('/members/update-bank-info/{id}',[UserController::class,'updateBankInfo']);
    Route::get('/members/bank-info/{id}',[UserController::class,'getMemberBankInfo']);
    Route::post('/members/change-affiliate-status',[UserController::class,'changeMemberAffiliateStatus']);


    Route::get('/withdrawal/',[WithdrawalRequestController::class,'index']);
    Route::get('/withdrawal/export-data',[WithdrawalRequestController::class,'getPendingRequestExportData']);
    Route::get('/withdrawal/history',[WithdrawalRequestController::class,'getUserHistory']);
    Route::post('/withdrawal/filter-requests',[WithdrawalRequestController::class,'filterRequest']);
    Route::get('/withdrawal/check-available',[WithdrawalRequestController::class,'checkAvailable']);
    Route::post('/withdrawal/create',[WithdrawalRequestController::class,'store']);
    Route::put('/withdrawal/update-requests',[WithdrawalRequestController::class,'update']);
    Route::post('/withdrawal/create-withdrawal-date',[MembershipPlanController::class,'storeWithdrawalDate']);


    Route::get('/orders',[OrderController::class,'index']);
    Route::get('/orders/user-orders',[OrderController::class,'getUserOrders']);
    Route::post('/orders/create',[OrderController::class,'create']);
    Route::put('/orders/update-status',[OrderController::class,'updateOrderStatus']);
    Route::put('/orders/filter-orders',[OrderController::class,'filterOrders']);


    Route::get('/category/only-sub-categories/{id}',[CategoryController::class,'onlySubCategoriesByParent']);
    Route::post('/category/create', [CategoryController::class,'create']);
    Route::get('/category/{id}',[CategoryController::class,'show']);
    Route::get('/category/{id}/edit',[CategoryController::class,'edit']);
    Route::put('/category/{id}',[CategoryController::class,'update']);
    Route::delete('/category/{id}',[CategoryController::class,'destroy']);


    //admin product
    Route::post('/product/create', [ProductController::class,'create']);
    Route::post('/product/create-countdown-product', [ProductController::class,'storeCountDownProduct']);
    Route::delete('/product/remove-countdown-product', [ProductController::class,'removeCountdownProduct']);
    Route::get('/product-edit/{id}',[ProductController::class,'edit']);
    Route::post('/product/update',[ProductController::class,'update']);
    Route::delete('/product/remove-image/{id}',[ProductController::class,'removeImage']);
    Route::delete('/product/{id}',[ProductController::class,'destroy']);


    //admin membership plan
    Route::post('/membership/create', [MembershipPlanController::class,'create']);
    Route::get('/membership/{id}/edit',[MembershipPlanController::class,'edit']);
    Route::put('/membership/{id}',[MembershipPlanController::class,'update']);
    Route::delete('/membership/{id}',[MembershipPlanController::class,'destroy']);


});


