<div class="popular-most-viewed">

    <div class="popular-news">
        <h2 class="heading">Popular News</h2>
        <div class="posts">
            @foreach ($posts as $post)
                <div class="post relative">
                    <a href="{{ route('post.show', $post->slug) }}" class="image-wrapper">
                        <img src="{{ $post->thumbnail }}" alt="w-full object-cover">
                    </a>

                    <div class="content">
                        <a class="post-tag mt-1 inline-block" href="#">
                            {{ $post->category->name }}
                        </a>
                        <h3 class="post-title">
                            <a href="{{ route('post.show', $post->slug) }}">
                                {{ $post->title }}
                            </a>
                        </h3>
                    </div>

                </div>
            @endforeach
        </div>
    </div>

    {{-- Most Viewed Posts --}}

    <div class="col-span-12 md:col-span-4">
        <livewire:components.news-style-one :posts="$mostViewed" heading="Most Viewed"/>
    </div>

</div>
