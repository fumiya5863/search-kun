var path = require('path');

// const srcPath = path.join(__dirname, './src');
// const atomicPath = path.join(srcPath, './atomic');

// const publicPath = path.join(__dirname, './public');

const srcPath = path.join(__dirname, 'src');
const atomicPath = path.join(srcPath, 'atomic');

const publicPath = path.join(__dirname, 'public');

// ~/Desktop/./atomic

module.exports = {
  mode: 'development',
  entry: path.join(srcPath, 'app.js'),
  resolve: {
      alias: {
          '@atoms': path.join(atomicPath, 'atoms'),
          '@molecules': path.join(atomicPath, 'molecules'),
          '@organisms': path.join(atomicPath, 'organisms'),
          '@pages': path.join(atomicPath, 'pages'),
          '@config': path.join(srcPath, 'config'),
          '@images': path.join(srcPath, 'images'),
          '@route': path.join(srcPath, 'route'),
          '@style': path.join(srcPath, 'style')
      }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: [
            /\.png$/,
            /\.jpg$/
        ],
        loader: "url-loader"
      }
    ]
  },
  output: {
    path: publicPath,
    filename: "bundle.min.js"
  },
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, './public')
    contentBase: path.join(__dirname, 'public')
  },
  devtool: 'source-map'
};
