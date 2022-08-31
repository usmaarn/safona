<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class TagController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['show', 'index']);
    }

    public function index()
    {
        return Inertia::render('Categories', [
            'tags' => Tag::all(),
        ]);
    }

    public function admin()
    {
        return Inertia::render('Admin/Tag/Index', [
            'tags' => Tag::all('id', 'name', 'slug'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Tag/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:50', 'unique:tags'],
            'slug' => ['required', 'alpha_dash', 'min:3', 'max:50', 'unique:tags'],
        ]);

        $Tag = Tag::create($validated);

        return redirect()->route('admin.tag.index');
    }

    public function show(Tag $tag)
    {
        return Inertia::render('Search', [
            'query' => $tag->slug,
            'posts' => $tag->posts,
        ]);
    }

    public function edit(Tag $tag)
    {
        return Inertia::render('Admin/Tag/Edit', [
            'tag' => $tag
        ]);
    }

    public function update(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => [
                'required', 'string', 'min:3', 'max:50',
                Rule::unique('tags')->ignore($tag)
            ],
            'slug' => [
                'required', 'alpha_dash', 'min:3', 'max:50',
                Rule::unique('tags')->ignore($tag)
            ],
        ]);

        $tag->update($validated);

        return redirect()->route('admin.tag.index');
    }

    public function remove(Tag $tag)
    {
        return Inertia::render('Admin/Tag/Delete', [
            'tag' => $tag,
        ]);
    }

    public function delete(Tag $tag)
    {
        $tag->delete();
        return redirect()->route('admin.tag.index');
    }
}
