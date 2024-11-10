const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
      inject: true,
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
  
  mode: 'production',
   resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    }
};
