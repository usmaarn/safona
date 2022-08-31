<?php

namespace App\Http\Livewire\Components\Post\Index;

use App\Models\Post;
use Livewire\Component;

class LatestNews extends Component
{

    public $posts;

    public function mount()
    {
        $this->posts = Post::limit(5)->latest()->get();
    }

    public function render()
    {
        return view('components.post.index.latest-news');
    }
}