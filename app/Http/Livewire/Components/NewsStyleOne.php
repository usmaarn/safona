<?php

namespace App\Http\Livewire\Components;

use Livewire\Component;

class NewsStyleOne extends Component
{

    public $posts;
    public $heading;

    public function render()
    {
        return view('components.news-style-one');
    }
}