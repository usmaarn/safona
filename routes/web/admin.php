<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;
use App\Http\Livewire\Admin\Home;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'admin'])->prefix('admin/')->group(function () {

    Route::name('admin.')->group(function () {
        Route::get('/', Home::class)->name('home');
        Route::view('/posts', 'admin.post.index')->name('posts');
        Route::view('/categories', 'admin.category')->name('categories');
        Route::view('/tags', 'admin.tag')->name('tags');
    });

    // Post
    Route::view('/posts/new', 'admin.post.create')->name('post.create');

    // User

    // Category
    Route::prefix('/categories/api',)->name('category.')->group(function () {
        Route::get('/all', [CategoryController::class, 'all'])->name('all');
        Route::post('/', [CategoryController::class, 'create'])->name('store');
        Route::put('/{category}', [CategoryController::class, 'update'])->name('update');
        Route::delete('/{category}/delete', [CategoryController::class, 'destroy'])->name('delete');
    });


    // Tag
    Route::prefix('/tags/api',)->name('tag.')->group(function () {
        Route::get('/all', [TagController::class, 'all'])->name('all');
        Route::post('/', [TagController::class, 'create'])->name('store');
        Route::put('/{tag}', [TagController::class, 'update'])->name('update');
        Route::delete('/{tag}/delete', [TagController::class, 'destroy'])->name('delete');
    });
});