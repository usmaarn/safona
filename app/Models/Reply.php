<?php

namespace App\Models;

use App\Traits\CanBeLiked;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reply extends Model
{
    use HasFactory, CanBeLiked;

    public function comment():BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }

    /**
     * Get the user that owns the Reply
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}