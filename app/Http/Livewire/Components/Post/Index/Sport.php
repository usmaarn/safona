<?php

namespace App\Http\Livewire\Components\Post\Index;

use App\Models\Category;
use Livewire\Component;

class Sport extends Component
{

    public $posts;

    public function mount()
    {
        $politics = Category::where('slug', 'sport')->first();
        $this->posts = $politics->posts()->latest()->limit(8)->get();
    }

    public function render()
    {
        return view('components.post.index.sport');
    }
}