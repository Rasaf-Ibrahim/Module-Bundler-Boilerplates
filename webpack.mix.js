// webpack.mix.js
let mix = require('laravel-mix');



// JS

mix.js('src/js/app.js', 'dist/js/app.js')


// Copy HTML files
.copy('src/*.html', 'dist')

// Copy Image directory
.copyDirectory('src/img', 'dist/img')



// var LiveReloadPlugin = require('webpack-livereload-plugin');

// mix.webpackConfig({
//     plugins: [new LiveReloadPlugin()]
// });