<?php

namespace App\Traits;

use App\Models\Like;

trait CanLike {

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function likesByType($model)
    {
        return $this->likes()->where(
            'likes.model_type', get_class($model)
        );
    }

    public function like($model)
    {
        return $this->likes()->create([
            'model_type' => get_class($model),
            'model_id' => $model->id,
        ]);
    }

    public function unLike($model)
    {
        return $this->likes()
            ->where('model_type', get_class($model))
            ->where('model_id', $model->id)
            ->delete();
    }

    public function hasLiked($model)
    {
        return $this->likes()
            ->where('model_type', get_class($model))
            ->where('model_id', $model->id)
            ->exists();
    }
    
    public function toggleLike($model)
    {
        return $this->hasLikeed($model)
            ? $this->unLike($model) 
            : $this->like($model);
    }
}