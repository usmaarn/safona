<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @livewireStyles
    @routes
</head>

<body class="">

    <div class="app">
        @yield('body')
    </div>

    <div id="modals"></div>

    @livewireScripts
    <script src="{{ asset('js/alpine.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
