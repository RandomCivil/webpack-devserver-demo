var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:8080','./js/components/index'],
  externals: [{
    'react-dom':'ReactDOM',
    'react':'React'
  }],
  output: {
    path:path.resolve(__dirname,'js/components'),
    filename: 'bundle.js'
  },
  module: {
    loaders:[
    {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'js/components'),
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias:[
    {'react-dom':'./libs/react-dom.js','react':'./libs/react.js'}
    ]
  },  
  plugins: [
  new webpack.HotModuleReplacementPlugin()
  ]
};