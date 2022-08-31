<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Pages\HomeController;
use App\Http\Controllers\PagesController;
use App\Http\Livewire\Post\Index;

Route::get('/', Index::class)->name('home');

// Route::get('/search', [PagesController::class, 'search'])
//     ->name('search');

// Route::get('/cat', [CategoryController::class, 'index'])
//     ->name('cat.index');

// Route::get('/cat/{category:slug}', [CategoryController::class, 'show'])
//     ->name('cat.show');

// Route::get('/tags', [PagesController::class, 'tags'])
//     ->name('tag.index');

// Route::get('/tags/{tag:slug}', [PagesController::class, 'tag'])
//     ->name('tag.show');

require_once __DIR__ . '/web/auth.php';
// require_once __DIR__ . '/web/dashboard.php';
require_once __DIR__ . '/web/post.php';