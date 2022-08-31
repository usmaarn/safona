<div>
    <h3 class="heading">Sport</h3>

    <div class="more-news">
        @foreach ($posts as $post)
            <div class="">
                <a href="{{ route('post.show', $post->slug) }}" class="block">
                    <img src="{{ $post->thumbnail }}" alt="{{ $post->title }}">
                </a>
                <div class="">
                    <a href="#" class="post-tag mt-1">{{ $post->category->name }}</a>
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
