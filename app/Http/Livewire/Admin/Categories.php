<?php

namespace App\Http\Livewire\Admin;

use App\Models\Category;
use Illuminate\Validation\Rule;
use Livewire\Component;

class Categories extends Component
{

    public $categories;

    public $name;
    public $slug;
    public $selected;

    public function mount()
    {
        $this->categories = Category::orderBy('id')->get();
    }

    public function edit($id)
    {
        $category = Category::find($id);
        $this->selected = $category;
    }

    public function update()
    {
        $data = $this->validate([
            'selected.name' => 'required|alpha|min:3',
            'selected.slug' => [
                'required', 'string', 'min:3',
                Rule::unique('categories', 'slug')->ignore($this->selected->id)
            ]
        ]);

        dd($data);
    }

    public function create()
    {
        $data = $this->validate([
            'name' => ['required', 'alpha'],
            'slug' => ['required', 'string', 'unique:categories']
        ]);
        $category = Category::create($data);
        $this->categories = Category::orderBy('id')->get();
    }

    public function render()
    {
        return view('admin.categories')->layout('layouts.admin');
    }
}
