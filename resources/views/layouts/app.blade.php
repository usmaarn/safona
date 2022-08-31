<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{  asset('css/cssg.css') }}">
    @livewireStyles
</head>
<body class="">

    <livewire:layouts.navbar />

    <div class="max-w-[1200px] mx-auto p-5 w-95%">

        @if (auth()->user() && !auth()->user()->email_verified_at)
            <div class="fixed bottom-0 left-0 w-full py-5 bg-yellow-500 z-50 flex items-center justify-center gap-10">
                <p class="text-black">You have not verified your email address yet</p>
                <a href="{{ route('verification.notice') }}" class="px-10 py-3 rounded-full bg-black text-white">Verify Email</a>
            </div>
        @endif

        @yield('content')
        {{ $slot }}
    </div>

    <livewire:layouts.footer />

    @livewireScripts
    <script src="{{ asset('js/alpine.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
