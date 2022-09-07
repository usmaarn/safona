<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = ['politics', 'kasu', 'nass', 'election', 'apc', 'pdp'];

        foreach($tags as $tag){
            Tag::create([
                'name' => $tag,
                'slug' => $tag,
            ]);
        }
    }
}