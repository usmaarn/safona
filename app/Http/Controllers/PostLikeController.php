<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostLikeController extends Controller
{
    public function like(Post $post)
    {
        auth()->user()->like($post);
        return ['liked' =>  auth()->user()->hasLiked($post)];
    }

    public function unlike(Post $post)
    {
        auth()->user()->unlike($post);
        return ['liked' =>  auth()->user()->hasLiked($post)];
    }

    public function liked(Post $post)
    {
        return [
            'liked' => auth()->user()->hasLiked($post),
        ];
    }

    public function toggle(Post $post)
    {
        auth()->user()->hasLiked($post)
            ? auth()->user()->unlike($post)
            : auth()->user()->like($post);
        return ['liked' =>  auth()->user()->hasLiked($post)];
    }

    public function likes(Post $post)
    {
        return [
            'likes' => $post->likes(),
        ];
    }
}