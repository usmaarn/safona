<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostBookmarkController extends Controller
{
    public function bookmark(Post $post)
    {
        auth()->user()->bookmark($post);
        return ['bookmarked' =>  auth()->user()->hasBookmarked($post)];
    }

    public function unbookmark(Post $post)
    {
        auth()->user()->unbookmark($post);
        return ['bookmarked' =>  auth()->user()->hasBookmarked($post)];
    }

    public function bookmarked(Post $post)
    {
        return [
            'bookmarked' => auth()->user()->hasbookmarked($post),
        ];
    }

    public function toggle(Post $post)
    {
        auth()->user()->hasBookmarked($post)
            ? auth()->user()->unbookmark($post)
            : auth()->user()->bookmark($post);
        return ['bookmarked' =>  auth()->user()->hasBookmarked($post)];
    }

    public function bookmarks(Post $post)
    {
        return [
            'bookmarks' => $post->bookmarks(),
        ];
    }
}