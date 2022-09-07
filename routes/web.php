<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Post\Index;

Route::get('/', Index::class)->name('home');


require_once __DIR__ . '/web/auth.php';
require_once __DIR__ . '/web/admin.php';
require_once __DIR__ . '/web/post.php';