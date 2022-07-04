<?php

use Illuminate\Support\Facades\Route;

Route::get('/', \App\Http\Controllers\Pages\HomeController::class)->name('home');
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'page'])->name('login');
