<?php

namespace App\Http\Livewire\Components\Post\Index;

use App\Models\Post;
use Livewire\Component;

class PopularNews extends Component
{

    public $posts;
    public $mostViewed;

    public function mount()
    {
        $this->posts = Post::latest()->offset(5)->limit(6)->get();
        $this->mostViewed = Post::latest()->offset(12)->limit(6)->get();
    }

    public function render()
    {
        return view('components.post.index.popular-news');
    }
}