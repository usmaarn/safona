<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;

class HomeController extends Controller
{
    public function __invoke()
    {

        $politics = Category::where('slug', 'politics')->first();
        $entertainment = Category::where('slug', 'entertainment')->first();
        $education = Category::where('slug', 'education')->first();
        $sport = Category::where('slug', 'sport')->first();
        $opinion = Category::where('slug', 'opinion')->first();

        return view('post.index')->with([
            'posts' => Post::limit(5)->latest()->get(),
            'popular' => Post::latest()->offset(5)->limit(6)->get(),
            'mostViewed' => Post::latest()->offset(12)->limit(6)->get(),
            'politics' => $politics->posts()->latest()->limit(8)->get(),
            'entertainment' => $entertainment->posts()->latest()->limit(8)->get(),
            'education' => $education->posts()->latest()->limit(8)->get(),
            'sport' => $sport->posts()->latest()->limit(8)->get(),
            'opinion' => $opinion->posts()->latest()->limit(8)->get(),
        ]);
    }
}