const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      // copys the content of the existing index.html to the new /build index.html
      template: './src/index.html',
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, "./")
      },
    port: 3000,
  
   
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
mode: 'production',
   resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    }
};
