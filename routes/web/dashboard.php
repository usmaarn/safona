<?php

use App\Http\Controllers\Admin\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->prefix('dashboard')->group(function() {
    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    });

    Route::get('/posts/create', [PostController::class, 'create'])
        ->name('post.create');
        
    Route::get('/posts/', [PostController::class, 'store'])
        ->name('post.store');
});