<?php

use App\Http\Livewire\Pages\Category;
use App\Http\Livewire\Pages\Search;
use App\Http\Livewire\Post\Show;
use Illuminate\Support\Facades\Route;


Route::get('/posts/{post:slug}', Show::class)->name('post.show');
Route::get('/posts/{cat:slug}', Category::class)->name('post.cat');
Route::get('/search', Search::class)->name('search');