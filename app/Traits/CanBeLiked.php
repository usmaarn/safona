<?php

namespace App\Traits;

use App\Models\Like;
use Illuminate\Support\Facades\DB;

trait CanBeLiked {
    public function likes()
    {
        return Like::where('model_id', $this->id)
            ->where('model_type', get_class($this))
            ->count();
    }
}