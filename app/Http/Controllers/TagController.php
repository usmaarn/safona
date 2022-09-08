<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
    public function all()
    {
        return Tag::orderBy('id')->get();
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'alpha_space', 'min:3'],
            'slug' => ['required', 'alpha_dash', 'min:3', 'unique:categories']
        ]);

        $tag = Tag::create($validated);
        return [
            'item' => $tag->only('name', 'slug', 'id'),
            'message' => 'Tag Created Successfully!'
        ];
    }

    public function update(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => ['required', 'alpha_space', 'min:3'],
            'slug' => [
                'required', 'alpha_dash', 'min:3',
                Rule::unique('categories')->ignore($tag)
            ]
        ]);

        $tag->update($validated);


        return [
            'item' => $tag->only('name', 'slug', 'id'),
            'message' => 'Tag Updated Successfully!'
        ];
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();

        return ['message' => 'Tag deleted successfully'];
    }
}