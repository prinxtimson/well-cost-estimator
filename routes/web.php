<?php

use App\Http\Controllers\WebhookController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::post('paystack/webhook', [WebhookController::class, 'handleWebhook']);

Route::middleware(['guest'])->group(function () {
    //
    //Route::post('/login', [LoginController::class, 'authenticate']);
    Route::get('/', function () {
        return view('welcome');
    })->name('home');

    Route::get('login', function () {
        return view('welcome');
    })->name('login');

    Route::get('register', function () {
        return view('welcome');
    })->name('register');

    Route::get('reset-password/{token}', function () {
        return view('welcome');
    })->name('password.reset');

    Route::get('forgot-password', function () {
        return view('welcome');
    })->name('password.forgot');

    // Route::post('/login', [AuthController::class, 'login']);
    // Route::post('password/email', [AuthController::class, 'forgotPass']);
    // Route::post('password/update', [AuthController::class, 'resetPass']);

});

Route::middleware(['auth'])->group(function () {
    // Route::put('change-password', [AuthController::class, 'changePass']);
    // Route::post('logout', [AuthController::class, 'logout']);
    Route::get('change-password', function () {
        return view('welcome');
    });
    Route::get('profile', function () {
        return view('welcome');
    });
    Route::get('dashboard', function () {
        return view('welcome');
    })->name('dashboard');
    Route::get('dashboard/{name?}/{id?}', function () {
        return view('welcome');
    })->name('dashboard');
    // Route::get('subscribe/{plan}', function () {
    //     return view('welcome');
    // });
});