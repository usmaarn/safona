<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Pages\HomeController;

Route::get('/', HomeController::class)->name('home');

require_once __DIR__ . '/auth.php';
