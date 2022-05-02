<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RigController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('profile/me', [ProfileController::class, 'me']);
    Route::get('profile/{id}', [ProfileController::class, 'show']);

    Route::get('project', [ProjectController::class, 'index']);
    Route::get('project/{id}', [ProjectController::class, 'show']);
    Route::post('project', [ProjectController::class, 'store']);
    Route::put('project/{id}', [ProjectController::class, 'update']);
    Route::delete('project/{id}', [ProjectController::class, 'destroy']);

    Route::get('subscription', [SubscriptionController::class, 'index']);
    Route::get('subscription/{id}', [SubscriptionController::class, 'show']);
    Route::get('subscription/verify/{trxref}', [SubscriptionController::class, 'verify']);
    Route::post('subscription/pay', [SubscriptionController::class, 'pay']);
    
    Route::get('card', [SubscriptionController::class, 'cards']);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|super-admin']], function () {
    Route::get('profile', [ProfileController::class, 'index']);
    Route::delete('profile/{id}', [ProfileController::class, 'destroy']);
    Route::put('profile/disable/{id}', [ProfileController::class, 'disable']);
    Route::put('profile/enable/{id}', [ProfileController::class, 'enable']);

    Route::get('rigsrate', [RigController::class, 'index']);
    Route::get('rigsrate/{id}', [RigController::class, 'show']);
    Route::post('rigsrate', [RigController::class, 'store']);
    Route::put('rigsrate/{id}', [RigController::class, 'update']);
});