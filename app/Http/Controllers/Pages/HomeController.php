<?php

namespace App\Http\Controllers\Pages;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home', [
           'latest' => Post::limit(5)->get(),
           'top' => Post::offset(5)->limit(5)->get(),
           'education' => Post::offset(10)->limit(5)->get(),
           'career' => Post::offset(15)->limit(6)->get(),
           'business' => Post::offset(21)->limit(3)->get(),
        ]);
    }
}