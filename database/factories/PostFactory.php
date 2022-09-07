<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'title' => $this->faker->sentence(),
            'slug' => $this->faker->slug(),
            'content' => $this->faker->paragraphs(7, true),
            'thumbnail' => $this->faker->imageUrl(),
            'published' => true,
            'category_id' => Category::all()->random()->id,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function(Post $post) {
            $post->tags()->attach(
                Tag::inRandomOrder()->limit(3)->get()
            );
        });
    }
}