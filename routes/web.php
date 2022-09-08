<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

require_once __DIR__ . '/web/auth.php';
require_once __DIR__ . '/web/admin.php';
require_once __DIR__ . '/web/post.php';