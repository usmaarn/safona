<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostBookmarkController;
use App\Http\Controllers\PostLikeController;
use App\Http\Controllers\PostController;



Route::prefix('/posts/{post:slug}/')->group(function(){
    
    Route::get('/', [PostController::class, 'show'])
        ->name('post.show');

    Route::get('/likes',[PostLikeController::class, 'likes'])
        ->name('post.likes'); 

    //authenticated actions
    Route::middleware('auth')->group(function () {
        
        Route::post('/comments', [CommentController::class, 'store'])
            ->name('comment.store');
        Route::get('/comments', [CommentController::class, 'index'])
            ->name('comment.index');

        Route::post('like',[PostLikeController::class, 'like'])
            ->name('post.like');
        Route::post('unlike',[PostLikeController::class, 'unlike'])
            ->name('post.unlike');
        Route::get('liked',[PostLikeController::class, 'liked'])
            ->name('post.liked');
        Route::post('toggle-like',[PostLikeController::class, 'toggle'])
            ->name('post.like.toggle');

        Route::post('bookmark',[PostBookmarkController::class, 'bookmark'])
            ->name('post.bookmark');
        Route::post('unbookmark',[PostBookmarkController::class, 'unbookmark'])
            ->name('post.unbookmark');
        Route::get('bookmarked',[PostBookmarkController::class, 'bookmarked'])
            ->name('post.bookmarked');
        Route::post('toggle-bookmark',[PostBookmarkController::class, 'toggle'])
            ->name('post.bookmark.toggle');     
    });
    
});