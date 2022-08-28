<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->query('q');
        $posts = Post::where('title', 'like', "%{$query}%")->limit(10)->get();

        return Inertia::render('Search', [
           'query' => $query,
           'posts' => $posts
        ]);
    }

    public function tags()
    {
        return Inertia::render('Tags', [
           'tags' => Tag::all(),
        ]);
    }

    public function tag(Tag $tag)
    {
        return Inertia::render('Search', [
           'query' => $tag->slug,
           'posts' => $tag->posts,
        ]);
    }
}
