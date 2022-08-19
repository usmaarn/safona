<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Pages\HomeController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\PostController;

Route::get('/', HomeController::class)->name('home');

Route::get('/posts/{post:slug}', [PostController::class, 'show'])
    ->name('post.show');

Route::get('/search', [PagesController::class, 'search'])
    ->name('search');
Route::get('/cat', [PagesController::class, 'categories'])
    ->name('cat.index');
Route::get('/cat/{category:slug}', [PagesController::class, 'category'])
    ->name('cat.show');
Route::get('/tags', [PagesController::class, 'tags'])
    ->name('tag.index');
Route::get('/tags/{tag:slug}', [PagesController::class, 'tag'])
    ->name('tag.show');

require_once __DIR__ . '/web/auth.php';
require_once __DIR__ . '/web/dashboard.php';