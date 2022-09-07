<?php

namespace App\Http\Livewire\Pages;

use App\Models\Category as ModelsCategory;
use App\Models\Post;
use Livewire\Component;

class Category extends Component
{
    public $top_posts;
    public $posts;
    public $limit = 2;
    public $offset = 7;
    public ModelsCategory $category;

    public function mount()
    {
        $this->top_posts = $this->category->posts()->latest()->limit(3)->get();
        $this->posts = $this->category->posts()->latest()->offset(3)->limit(4)->get();
    }

    public function load_more()
    {
        $posts = $this->category->posts()
            ->latest()
            ->offset($this->offset)
            ->limit($this->limit)
            ->get();
        $this->offset += $this->limit;
        return $this->posts = [...$this->posts, ...$posts];
    }

    public function render()
    {
        return view('pages.category');
    }
}