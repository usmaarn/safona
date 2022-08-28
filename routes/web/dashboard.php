<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {

    Route::get('/', function () {
        return Inertia::render('Dashboard/Index');
    });

    Route::get('categories', [CategoryController::class, 'admin'])
        ->name('admin.cat.index');
    Route::get('categories/create', [CategoryController::class, 'create'])
        ->name('cat.create');
    Route::post('categories', [CategoryController::class, 'store'])
        ->name('cat.store');
    Route::get('categories/{category}/edit', [CategoryController::class, 'edit'])
        ->name('cat.edit');
    Route::put('/categories/{category}', [CategoryController::class, 'update'])
        ->name('cat.update');
    Route::get('/categories/{category}/delete', [CategoryController::class, 'remove'])
        ->name('cat.remove');
    Route::delete('categories/{category}/delele', [CategoryController::class, 'delete'])
        ->name('cat.delete');


    Route::get('tags', [TagController::class, 'admin'])
        ->name('admin.tag.index');
    Route::get('tags/create', [TagController::class, 'create'])
        ->name('tag.create');
    Route::post('tags', [TagController::class, 'store'])
        ->name('tag.store');
    Route::get('tags/{tag}/edit', [TagController::class, 'edit'])
        ->name('tag.edit');
    Route::put('/tags/{tag}', [TagController::class, 'update'])
        ->name('tag.update');
    Route::get('/tags/{tag}/delete', [TagController::class, 'remove'])
        ->name('tag.remove');
    Route::delete('tags/{tag}/delele', [TagController::class, 'delete'])
        ->name('tag.delete');


    Route::get('/posts', [PostController::class, 'index'])
        ->name('post.index');
    Route::get('/posts/create', [PostController::class, 'create'])
        ->name('post.create');
    Route::post('/posts/', [PostController::class, 'store'])
        ->name('post.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])
        ->name('post.edit');
    Route::put('/posts/{post}/update', [PostController::class, 'update'])
        ->name('post.update');
    Route::get('/posts/{post}/delete', [PostController::class, 'remove'])
        ->name('post.remove');
    Route::delete('/posts/{post}/delete', [PostController::class, 'delete'])
        ->name('post.delete');
});