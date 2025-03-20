<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">
    <title>陳勝嶸 的履歷網頁</title>
    @vite(['resources/css/app.css','resources/js/app.js'])

</head>
<body>
{{--<div class="">11</div>--}}
<div class="bg-emerald-600" id="app"></div>
</body>
</html>
