const mix = require('laravel-mix');


mix

  // JS
   .js('./src/js/app.js', 'dist/app.js').vue({ version: 2 })
   .js('./src/js/component/water.js', 'dist/app.js').vue({ version: 2 })
 


  // CSS
   .postCss('./src/css/style.css', 'dist', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
  ])

  // Options
  .options({
    processCssUrls: false,
    terser: {
      extractComments: false, // Stop Mix from generating license file
    }
  })

  // Copy HTML files
  .copy('src/*.html', 'dist')

  // Copy Image directory
  .copyDirectory('src/img', 'dist/img')

  // BrowserSync
  .browserSync({
    proxy: false,
    server: 'dist',
    files: [
      'dist/**/*.{css,js,html,php,jpg,jpeg,png,gif,svg}',
    ]
  })


  //Warning: If you remove browerSync configuration and it's related package by 'npm remove', then this program will not work. 