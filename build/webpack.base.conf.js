var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var glob = require('glob');
var entries = getEntry('./src/module/*/*.js'); // 获得入口js文件

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp.splice(1, 1).toString().toLowerCase(); // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  return entries;
}

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var webpackBaseConfig = {
  entry: Object.assign(entries,{
    vendors : ['jquery', 'bootstrap']
  }),
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue','.css'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'jspath': path.resolve(__dirname, '../src/assets/js'),
      jquery: path.resolve(__dirname, '../src/assets/js/libs/jquery.min.js'),
      bootstrap: path.resolve(__dirname, '../src/assets/js/libs/bootstrap.min.js'),
      modernizr: path.resolve(__dirname,'../src/assets/js/libs/modernizr.custom.css3.js')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('image/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style','css')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /(modernizr)(\.\w+)*\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('static/css/[name].css', {allChunks: true}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    // loaders: {
    //   css: ExtractTextPlugin.extract('style','css')
    // },
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
};
module.exports = webpackBaseConfig;
