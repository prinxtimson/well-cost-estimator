<?php

use App\Http\Controllers\ProfileController;
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
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin|super-admin']], function () {
    Route::get('profile', [ProfileController::class, 'index']);
    Route::delete('profile/{id}', [ProfileController::class, 'destroy']);
    Route::put('profile/disable/{id}', [ProfileController::class, 'disable']);
    Route::put('profile/enable/{id}', [ProfileController::class, 'enable']);
});