<?php

use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->prefix('admin/')->name('admin.')->group(function () {
    Route::resource('user', UserController::class);
    Route::resources('post', PostController::class);
    Route::resource('tag', TagController::class);
});