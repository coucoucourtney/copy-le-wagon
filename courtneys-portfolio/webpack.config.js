const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
     }
  ]
  },
  resolve: {
  extensions: [ '.js', '.jsx' ]
},

 plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve(__dirname, 'public/index.html'),
       filename: 'index.html'
    })
 ]
};
