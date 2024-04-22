<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React application</title>
    @viteReactRefresh
</head>

<body>
    <h2 style="text-align: center"> Laravel and React application </h2>
    <div id="root"></div>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</body>

</html>
