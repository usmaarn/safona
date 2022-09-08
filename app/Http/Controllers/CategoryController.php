<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public function all()
    {
        return Category::orderBy('id')->get();
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'alpha_space', 'min:3'],
            'slug' => ['required', 'alpha_dash', 'min:3', 'unique:categories']
        ]);

        $category = Category::create($validated);
        return [
            'item' => $category->only('name', 'slug', 'id'),
            'message' => 'Category Created Successfully!'
        ];
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => ['required', 'alpha_space', 'min:3'],
            'slug' => [
                'required', 'alpha_dash', 'min:3',
                Rule::unique('categories')->ignore($category)
            ]
        ]);

        $category->update($validated);


        return [
            'item' => $category->only('name', 'slug', 'id'),
            'message' => 'Category Updated Successfully!'
        ];
    }

    public function destroy(Category $category)
    {
        $category->delete();

        return ['message' => 'Category deleted successfully'];
    }
}