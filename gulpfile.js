var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir(function(mix) {
    var bc = './bower_components/';
    var output_libs = './public/app/libs/';

    mix.sass('styles.min.sass');
    mix.styles([
        bc+'angular-toasty/dist/angular-toasty.css',
        bc+'bootstrap/dist/css/bootstrap.css',
        bc+'bootstrap-material-design/dist/css/roboto.css',
        bc+'bootstrap-material-design/dist/css/material-fullpalette.css',
        bc+'bootstrap-material-design/dist/css/ripples.css'
    ], 'public/css/plugins.min.css');

    mix.copy('node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets', 'resources/assets/sass/bourbon');

    mix.copy(
        bc+'bootstrap/dist/',
        output_libs+'bootstrap/'
    );

    mix.copy(
        bc+'jquery/dist/',
        output_libs+'jquery/'
    );

    mix.copy(
        bc+'bootstrap-material-design/dist/',
        output_libs+'bootstrap-material-design/'
    );

    mix.scripts(
        ['angular/angular.js',
            'angular-animate/angular-animate.js',
            'angular-cookies/angular-cookies.js',
            'angular-i18n/angular-locale_ru-ru.js',
            'angular-loader/angular-loader.js',
            'angular-resource/angular-resource.js',
            'angular-route/angular-route.js',
            'angular-sanitize/angular-sanitize.js',
            'angular-touch/angular-touch.js',
            'firebase/firebase.js',
            'angularfire/dist/angularfire.js',
            'angular-toasty/dist/angular-toasty.js'
        ],
        output_libs+'angular/angular.concat.js', // TODO: Задать jsOutput и др. в файле elixir.json
        bc
    );
});
