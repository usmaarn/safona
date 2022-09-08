
<div class="news-style-one">
    <h3 class="heading">{{ $heading }}</h3>
    <div class="posts">
        @foreach ($posts as $post)
            <div class="post">
                <a href="{{ route('post.show', $post->slug) }}" class="image-wrapper bg-zinc-300">
                    <img src="{{ $post->thumbnail }}" alt="">
                </a>
                <div class="content">
                    <a href="#" class="post-tag">
                        {{ $post->category->name }}
                    </a>
                    <h3>
                        <a href="{{ route('post.show', $post->slug) }}">
                            {{ $post->title }}
                        </a>
                    </h3>
                </div>
            </div>
        @endforeach
    </div>
</div>
