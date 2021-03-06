<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Sample Site</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
        <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

    </head>
    <body>
        <div id="app">
            <section class="section">
                <div class="container">
                    <router-view
                    keep-alive
                    transition
                    transition-mode="out-in">
                    </router-view>
                </div>
            </section>
        </div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
