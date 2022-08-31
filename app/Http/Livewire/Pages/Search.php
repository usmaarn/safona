<?php

namespace App\Http\Livewire\Pages;

use App\Models\Post;
use Illuminate\Http\Request;
use Livewire\Component;

class Search extends Component
{
    public $top_posts;
    public $posts;
    public $limit = 2;
    public $offset = 7;
    public $more;

    public function mount(Request $request)
    {
        $query = $request->query('q');
        $this->query = $query;
        $posts = Post::where('title', 'like', "%$query%")->latest();
        $this->top_posts = $posts->limit(3)->get();
        $this->posts = $posts->offset(3)->limit(10)->get();
        $this->more = Post::latest()->limit(15)->get();
    }

    public function load_more()
    {

        $this->offset += $this->limit;
        // return $this->posts = [...$this->posts, ...$posts];
    }
    public function render()
    {
        return view('pages.search');
    }
}