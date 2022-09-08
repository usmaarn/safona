<?php

namespace App\Http\Controllers\Post;

use App\Http\Controllers\Controller;
use App\Models\Post;

class ShowPostController extends Controller
{
    public function __invoke(Post $post)
    {
        $relatedNews = $post->where('category_id', $post->category->id)
            ->whereNot('id', $post->id)->latest()->limit(8)->get();

        return view('post.show', [
            'post' => $post,
            'userFullName' => $post->user->firstname . ' ' . $post->user->lastname,
            'relatedNews' => $relatedNews
        ]);
    }
}