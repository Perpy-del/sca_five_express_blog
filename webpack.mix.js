let mix = require('laravel-mix');

// mix.copy('node_modules/bootstrap/dist/css/bootstrap.css', 'public/css/index.css');

mix.sass('resources/sass/index.scss', 'public/css/app.css')
    .js('resources/js/index.js', 'public/js')
    .copy('resources/sass/index.css', 'public/css/')
    .copy('resources/sass/blog.css', 'public/css/');