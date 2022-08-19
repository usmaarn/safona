<?php

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


Route::middleware('auth')->group(function () {
    Route::post('/logout', LogoutController::class)->name('logout');
});