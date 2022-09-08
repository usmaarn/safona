@extends('layouts.app')

@section('content')

    <div class="post-index">
        <x-post.index.latest-news :posts="$posts" />
        <x-post.index.popular-news :posts="$popular" :mostViewed="$mostViewed"/>
        <x-post.index.politics :posts="$politics" />
        <x-post.index.entertainment :posts="$entertainment" />
        <x-post.index.education :posts="$education" />
        <x-post.index.sport :posts="$sport" />
        <x-post.index.opinions :posts="$opinion" />
    </div>

@endsection
