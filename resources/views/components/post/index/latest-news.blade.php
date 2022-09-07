<div class="latest-news">
    <h1 class="heading">Latest News</h1>
    <div class="posts">
        @foreach ($posts as $post)
            <div class="post relative">
                <a href="{{ route('post.show', $post->slug) }}">
                    <div class="image-wrapper">
                        <img src="{{ $post->thumbnail }}" alt="" class="">
                    </div>
                    <div class="content">
                        <h3 class="post-title">
                            <a href="{{ route('post.show', $post->slug) }}">
                                {{ $post->title }}
                            </a>
                        </h3>
                        <div class="post-meta">
                            <a href="{{ route('post.show', $post->slug) }}"
                                class="capitalize">
                                {{ $post->category->name }}
                            </a>
                            <p>{{ $post->created_at->diffForHumans() }}</p>
                        </div>
                    </div>
                </a>
            </div>
        @endforeach
    </div>
</div>
