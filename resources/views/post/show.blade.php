@extends('layouts.app')


@section('content')

<div class="py-10 md:py-20 space-y-10">
        <h1 class="text-4xl md:text-5xl md:pb-10">{{ $post->title }}</h1>

        <div class="flex flex-col gap-20 lg:grid grid-cols-3 lg:gap-10">
            <div class="col-span-2 space-y-10">
                <div class="flex flex-col md:flex-row justify-between gap-5">
                    <div class="flex gap-5">
                        <div class="w-16 h-16 rounded-full bg-gray-500">
                            <img src="#" alt="">
                        </div>

                        <div class="space-y-1">
                            <h3 class="text-xl font-bold">
                                <a href="#">{{ $userFullName }}</a>
                            </h3>
                            <p class="text-zinc-500">
                                Published <b>{{ $post->created_at->diffForHumans() }}</b>
                            </p>
                        </div>
                    </div>

                    <div class="share-menu" data-post-slug="{{ $post->slug }}"></div>
                </div>

                <div class="space-x-5">
                    @foreach ($post->tags as $tag)
                        <a href="#" class="capitalize text-lg px-3 py-1 rounded border bg-zinc-100">
                            {{ $tag->name }}
                        </a>
                    @endforeach
                </div>

                <div class="space-y-2">
                    <img src="{{ $post->thumbnail }}" alt="{{ $post->title }}" class="w-full">
                    <p class="px-5 border-l-8 py-3 uppercase text-xl border-green-600
                        text-green-600 font-bold bg-green-50">
                        {{ $post->category->name }}
                    </p>
                </div>

                <div class="space-y-10">

                    <div class="text-lg md:text-xl leading-loose md:leading-10">
                        {{ $post->content }}
                    </div>

                    <div class="flex flex-col sm:flex-row gap-10 sm:items-center justify-between">

                        <div class="flex items-center gap-10 text-xl">
                            <button class="flex items-start gap-2" wire:click='toggleLike'>
                                @if (auth()->user() && auth()->user()->hasLiked($post))
                                    <i class="bi bi-heart-fill text-4xl"></i>
                                @else
                                    <i class="bi bi-heart text-4xl"></i>
                                @endif
                                <span>{{ $post->likes() }}</span>
                            </button>
                                {{-- <p class="flex items-start gap-2">
                                    <i class="bi bi-chat-square-text text-4xl"></i>
                                    <span>354</span>
                                </p> --}}
                        </div>

                        <div class="share-menu" data-post-slug="{{ $post->slug }}"></div>

                    </div>

                </div>
            </div>


            {{-- Most Viewed Posts --}}

            <div class="col-span-1">
                <div class="news-style-one">
                    <h3 class="heading">Related News</h3>
                    <div class="posts">
                        @foreach ($relatedNews as $post)
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
            </div>

        </div>
    </div>

@endsection
