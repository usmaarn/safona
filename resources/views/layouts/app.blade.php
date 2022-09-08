@extends('layouts.master')


@section('body')

@include('layouts.navbar')

<div class="max-w-[1200px] mx-auto p-5 w-95%">

    @if (auth()->user() && !auth()->user()->email_verified_at)
    <div class="fixed bottom-0 left-0 w-full py-5 bg-yellow-500 z-50 flex items-center justify-center gap-10">
        <p class="text-black">You have not verified your email address yet</p>
        <a href="{{ route('verification.notice') }}" class="px-10 py-3 rounded-full bg-black text-white">Verify
            Email</a>
    </div>
    @endif

    <div class="">
        @yield('content')
    </div>

</div>

@include('layouts.footer')

@endsection
