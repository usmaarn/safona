<?php

namespace App\Models;

use App\Traits\CanBeLiked;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Comment extends Model
{
    use HasFactory, CanBeLiked;

    protected $fillable = ['user_id', 'post_id', 'body'];

    public function replies():HasMany
    {
        return $this->hasMany(Reply::class);
    }

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function post():BelongsTo
    {
        return $this->belongsTo(Post::class);
    }
}