// webpack.mix.js
let mix = require('laravel-mix');



// JS

mix.js('src/js/app.js', 'dist/js/app.js')



.postCss('src/tailwind/index.css', 'dist/tailwind/index.css')

.options({
    postCss: [
        require("postcss-import"),
        require('autoprefixer'),
        require('tailwindcss'),
    ]
})

// Copy HTML files
.copy('src/*.html', 'dist')

// Copy Image directory
.copyDirectory('src/img', 'dist/img')

























/*

var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
     plugins: [new LiveReloadPlugin()]
 });

*/


/*

 In the laravel mix's official documentation, it is mentioned that in order to use live reload, we need to install 'webpack-livereload-plugin`. and  add the above commented out lines at the bottom of the webpack.mix.js file. But when I added those lines after installing 'webpack-livereload-plugin`, I got an error! So, I commented out those above lines of code. t

*/