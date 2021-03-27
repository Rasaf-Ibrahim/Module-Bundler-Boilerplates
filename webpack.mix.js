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


  





  /*



 ***** Reduced js file *****

Usually, in development mode (npm run dev), the file size will be about 330kb. And in the productin mode (npm run prod), the file should be under 100kb. 



***** Only use the following rule if you don't get a reduce version in the productin mode *****

But if you don't get a reduce file size in the production mode, download vue.min.js and put it in the 'src/js' folder. Then config this file by adding 

 .js('./src/js/vue.min.js', 'dist/app.js') 

 We are outputtin all js file in 'app.js' and 'vue.min.js' is already a reduce version, so, that will help to reduce file size. 



  */