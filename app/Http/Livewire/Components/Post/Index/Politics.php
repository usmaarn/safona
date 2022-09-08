<?php

namespace App\Http\Livewire\Components\Post\Index;

use App\Models\Category;
use App\Models\Post;
use Livewire\Component;

class Politics extends Component
{

    public $posts;

    public function mount()
    {
        $politics = Category::where('slug', 'politics')->first();
    }

    public function render()
    {
        return view('components.post.index.politics');
    }
}