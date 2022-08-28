<?php

use App\Http\Controllers\Auth\EmailVerificationController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;

Route::middleware('guest')->group(function () {
    Route::get('/login', LoginController::class)->name('login');
    Route::post('/login', [LoginController::class, 'login'])->name('login');

    Route::get('/register', RegisterController::class)->name('register');
    Route::post('/register', [RegisterController::class, 'register'])->name('register');
});



Route::prefix('auth/email/')->group(function () {

    Route::get('/verify', [EmailVerificationController::class, 'notice'])
        ->name('verification.notice');

    Route::get('/verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])
        ->middleware('signed')->name('verification.verify');

    Route::post('/verification-notification', [EmailVerificationController::class, 'send'])
        ->middleware('throttle:6,1')->name('verification.send');

    Route::post('/logout', LogoutController::class)->name('logout');
});