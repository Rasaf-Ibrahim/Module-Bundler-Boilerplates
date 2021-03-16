// webpack.mix.js
let mix = require('laravel-mix');

// Sass
mix.sass('scss/style.scss', 'dist');




/*

// Configuring Live Reload

var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});

*/