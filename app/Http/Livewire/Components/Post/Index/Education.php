<?php

namespace App\Http\Livewire\Components\Post\Index;

use App\Models\Category;
use Livewire\Component;

class Education extends Component
{

    public $posts;

    public function mount()
    {
        $politics = Category::where('slug', 'education')->first();
        $this->posts = $politics->posts()->latest()->limit(8)->get();
    }

    public function render()
    {
        return view('components.post.index.education');
    }
}