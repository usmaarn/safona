<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @livewireStyles
</head>
<body class="min-h-screen">

    <div class="bg-zinc-100 flex items-center justify-center min-h-screen">
        <div class="flex flex-col gap-10">
            <h1 class="text-3xl font-black text-zinc-700 text-center">
                <a href="/">Safona Media</a>
            </h1>
            {{ $slot }}
        </div>
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
    @livewireScripts
</body>
</html>
