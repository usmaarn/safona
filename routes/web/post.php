<?php

use App\Http\Livewire\Pages\Category;
use App\Http\Livewire\Pages\Search;
use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Post\Show;

Route::prefix('/')->group(function () {
    Route::get('posts/{post:slug}', Show::class)->name('post.show');
    Route::get('/posts/categories/{category:slug}', Category::class)
        ->name('post.cat');
    Route::get('/search', Search::class)->name('search');
});