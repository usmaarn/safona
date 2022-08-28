<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Post/Index', [
            'posts' => Post::all(),
        ]);
    }

    public function show(Post $post)
    {

        return Inertia::render('Post/Show', [
            'post' => $post,
            'author' => $post->user,
            'postTags' => $post->tags,
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/Post/Create', [
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'min:10', 'max:255', 'unique:posts'],
            'content' => ['required', 'string', 'min:300', 'unique:posts'],
            'thumbnail' => ['required', 'image:png,jpg,jpeg', 'max:2048'],
            'tags' => ['required', 'array'],
            'category_id' => ['required', 'integer'],
            'publish' => ['required', 'boolean']
        ]);

        $image = $validated['thumbnail'];
        $imageName = str_replace(' ', '', $validated['title']) . '.jpg';
        $thumbnail = storage_path('app/public/thumbnails/' . $imageName);
        Storage::missing('public/thumbnails') && Storage::makeDirectory('public/thumbnails');
        Storage::missing('public/images') && Storage::makeDirectory('public/images');
        Storage::putFileAs('/public/images/', $image, $imageName);
        Image::make($image)->resize(400, 300)->save($thumbnail);

        $post = auth()->user()->posts()->create([
            'title' => $validated['title'],
            'slug' => str_replace(' ', '_', $validated['title']),
            'content' => $validated['content'],
            'category_id' => $validated['category_id'],
            'published' => $validated['publish'],
            'thumbnail' => $imageName,
        ]);

        $post->tags()->attach($validated['tags']);

        return redirect()->route('post.index');
    }

    public function edit(Post $post)
    {
        return Inertia::render('Admin/Post/Edit', [
            'post' => $post->with('category')
                ->with('tags')->find($post->id),
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => [
                'required', 'string', 'min:10', 'max:255',
                Rule::unique('posts')->ignore($post)
            ],
            'content' => ['required', 'string', 'min:300'],
            'tags' => ['required', 'array'],
            'category_id' => ['required', 'integer'],
            'publish' => ['required', 'boolean']
        ]);

        $post->update($validated);

        $post->tags()->sync($validated['tags']);

        return redirect()->route('post.index');
    }

    public function remove(Post $post)
    {
        return Inertia::render('Admin/Post/Delete', [
            'post' => $post,
        ]);
    }

    public function delete(Post $post)
    {
        $post->delete();
        return redirect()->route('post.index');
    }
}