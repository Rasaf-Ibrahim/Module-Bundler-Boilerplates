
const path = require('path')
// path is needed to define output folder. As Path comes with node, we call it here by using require. 

module.exports = {

mode: 'development',
// Comment out mode when you want to build for production. Because mode defaults to 'production' if not set.
 


entry:  './src/index.js',
output: {
  filename:'main.js',
  path: path.resolve(__dirname, 'dist')
},

// If we use `src/index.js` for entry and `dist/main.js` for output, then  we don't need to configure entry and output. Because `src/index.js` for entry and `dist/main.js` for output is default in webpack. But for any other path, we need to configure.


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          // without additional settings, this will reference .babelrc
        },
      },
    ],
  },


  devtool: "source-map",
  // Source-map helps to debug code. Browsers will only attempt to download the source map when we open dev tools.

  
  devServer: {
    contentBase: "./dist",
  },
// YOu have to define output folder to use live reload. If you change output folder, also change that here. 


};

