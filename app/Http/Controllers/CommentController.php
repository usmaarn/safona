<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        return $post->comments()
        ->with('user')
        ->latest()
        ->get();
    }
    
    public function store(Request $request, Post $post)
    {
        $validated = $request->validate([
           'comment' => ['required', 'string'],
        ]);

        $comment = $post->comments()->create([
            'body' => $validated['comment'],
            'user_id' => auth()->id(),
        ]);

        return $comment
            ->with('user')
            ->find($comment->id);
    }
}