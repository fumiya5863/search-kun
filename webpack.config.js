var path = require('path');

const srcPath = path.join(__dirname, "./src");

const atomicPath = path.join(srcPath, "atomic");
const publicPath = path.join(__dirname, "./public");

module.exports = {
  mode: 'development',
  entry: path.join(srcPath, "./components/app.js"),
  resolve: {
      alias: {
          '@atoms': path.join(atomicPath, "atoms"),
          '@molecules': path.join(atomicPath, "molecules"),
          '@organisms': path.join(atomicPath, "organisms"),
          '@components': path.join(srcPath, './components'),
          '@config': path.join(srcPath,  './config'),
          '@hooks': path.join(srcPath, "hooks"),
          '@images': path.join(srcPath, './images'),
          '@styles': path.join(srcPath, './styles')
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
    contentBase: path.join(__dirname, './public')
  },
  devtool: 'source-map'
};
