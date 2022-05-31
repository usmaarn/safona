<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ config('app.name') }}</title>

    {{--  Styles Files  --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    {{--  Script Files  --}}
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/flowbite.js') }}" defer></script>

</head>
<body>

    

</body>
</html>
