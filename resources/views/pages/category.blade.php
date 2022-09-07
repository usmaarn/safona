<div class="space-y-10">
    <h3 class="heading bg-transparent text-2xl uppercase font-black">
        {{ $category->name }}
    </h3>

    <div class="grid lg:grid-cols-[auto_350px] gap-10">
        <div class="space-y-10">
            <div class="grid md:grid-cols-3 md:grid-rows-2 gap-3">
                @foreach ($top_posts as $post)
                    <div class="md:first:col-span-2 first:row-span-2 bg-zinc-300 h-40 first:h-64 md:h-56  md:first:h-full relative">
                        <div class="bg-black h-full">
                            <img src="{{ $post->thumbnail }}" alt="{{ $post->title }}" class="opacity-50 h-full w-full object-cover">
                        </div>
                        <div class="absolute bottom-0 p-5 md:p-10">
                            <h2 class="text-2xl text-white">
                                <a href="{{ route('post.show', $post->slug) }}">{{ $post->title }}</a>
                            </h2>
                        </div>
                    </div>
                @endforeach
            </div>

            <div class="grid sm:grid-cols-2 gap-5 md:gap-10">
                @foreach ($posts as $post)
                    <div class="space-y-2">
                        <div class="h-64 bg-zinc-200">
                            <img src="{{ $post->thumbnail }}" alt="{{ $post->title }}" class="w-full h-full object-cover">
                        </div>
                        <a href="#" class="post-tag inline-block px-2 py-1 bg-green-500 uppercase text-white text-sm tracking-widest">
                            {{ $post->category->name }}
                        </a>
                        <h2 class="text-lg md:text-xl">
                            <a href="{{ route('post.show', $post->slug) }}">
                                {{ $post->title }}
                            </a>
                        </h2>
                    </div>
                @endforeach
            </div>

            <button wire:click='load_more'>Load More</button>

        </div>

        <livewire:components.news-style-one :posts="$posts" heading="More News" />

    </div>
</div>
