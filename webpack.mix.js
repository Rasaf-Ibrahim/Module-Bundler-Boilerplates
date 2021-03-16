// webpack.mix.js
let mix = require('laravel-mix');

// Sass
mix.sass('src/scss/style.scss', 'dist');

// JS

mix.js('src/app.js', 'dist')


/*

// Configuring Live Reload

var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});

*/