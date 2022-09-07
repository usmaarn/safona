<?php

use App\Http\Livewire\Admin\Categories;
use App\Http\Livewire\Admin\Home;
use App\Http\Livewire\Admin\Post\Create;
use App\Http\Livewire\Admin\Post\Index as PostIndex;
use App\Http\Livewire\Admin\Tags;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->prefix('admin/')->name('admin.')->group(function () {
    Route::get('/', Home::class)->name('home');
    Route::get('/tags', Tags::class)->name('tags');
    Route::get('/categories', Categories::class)->name('cat');
    Route::get('/posts', PostIndex::class)->name('posts');
    Route::get('/posts/new', Create::class)->name('post.create');
});