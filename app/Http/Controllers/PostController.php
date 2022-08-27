<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(Post $post)
    {
    
        return Inertia::render('Post/Show', [
            'post' => $post,
            'author' => $post->user,
            'postTags' => $post->tags,
        ]);
    }
}