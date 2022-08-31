<?php

namespace App\Http\Livewire\Components\Posts\Show;

use Livewire\Component;

class ShareMenu extends Component
{
    public $slug;

    public function render()
    {
        return view('components.posts.show.share-menu');
    }
}