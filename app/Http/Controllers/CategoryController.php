<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except(['show', 'index']);
    }

    public function index()
    {
        return Inertia::render('Categories', [
            'cats' => Category::all(),
        ]);
    }

    public function admin()
    {
        return Inertia::render('Admin/Category/Index', [
            'categories' => Category::all('id', 'name', 'slug'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Category/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:50', 'unique:categories'],
            'slug' => ['required', 'alpha_dash', 'min:3', 'max:50', 'unique:categories'],
        ]);

        $category = Category::create($validated);

        return redirect()->route('admin.cat.index');
    }

    public function show(Category $category)
    {
        return Inertia::render('Search', [
            'query' => $category->slug,
            'posts' => $category->posts,
        ]);
    }

    public function edit(Category $category)
    {
        return Inertia::render('Admin/Category/Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => [
                'required', 'string', 'min:3', 'max:50',
                Rule::unique('categories')->ignore($category)
            ],
            'slug' => [
                'required', 'alpha_dash', 'min:3', 'max:50',
                Rule::unique('categories')->ignore($category)
            ],
        ]);

        $category->update($validated);

        return redirect()->route('admin.cat.index');
    }

    public function remove(Category $category)
    {
        return Inertia::render('Admin/Category/Delete', [
            'category' => $category,
        ]);
    }

    public function delete(Category $category)
    {
        $category->delete();
        return redirect()->route('admin.cat.index');
    }
}