<?php

namespace App\Traits;

use App\Models\Bookmark;

trait CanBookmark {
    
    public function bookmarks()
    {
        return $this->hasMany(Bookmark::class);
    }

    public function bookmarksByType($model)
    {
        return $this->bookmarks()->where('bookmarks.model_type', get_class($model));
    }

    public function bookmark($model)
    {
        return $this->bookmarks()->create([
            'model_type' => get_class($model),
            'model_id' => $model->id,
        ]);
    }

    public function unbookmark($model)
    {
        return $this->bookmarks()
            ->where('model_type', get_class($model))
            ->where('model_id', $model->id)
            ->delete();
    }

    public function hasBookmarked($model)
    {
        return $this->bookmarks()
            ->where('model_type', get_class($model))
            ->where('model_id', $model->id)
            ->exists();
    }
    
    public function toggleBookmark($model)
    {
        return $this->hasBookmarked($model)
            ? $this->unbookmark($model) 
            : $this->bookmark($model);
    }
}