<?php

namespace App\Http\Livewire\Post;

use App\Models\Post;
use Livewire\Component;

class Show extends Component
{

    public $post;
    public $userFullName;
    public $relatedNews;

    public function mount(Post $post)
    {
        $this->post = $post;
        $this->userFullName = $post->user->firstname . ' ' . $post->user->lastname;
        $this->relatedNews = Post::where('category_id', $post->category_id)
            ->whereNot('id', $post->id)->latest()->limit(8)->get();
    }

    public function toggleLike()
    {
        return auth()->user()->toggleLike($this->post);
    }

    public function render()
    {
        return view('post.show');
    }
}
