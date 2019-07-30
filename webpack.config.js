const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
   devServer: {
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      },
    },
   entry: "./src/index.js",
   output: {
      filename: "bundle.js",
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: {
               loader: 'svg-react-loader'
            }

         },
         {
            test: /\.scss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: '../'
                  }
               },
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
               'file-loader',
               {
                  loader: 'image-webpack-loader',
                  options: {
                     bypassOnDebug: true, // webpack@1.x
                     disable: true, // webpack@2.x and newer
                  },
               },
            ],
         }
      ]
   },
   node: {
      fs: "empty"
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./src/index.html",
         filename: "./index.html"
      }),
      new CopyWebpackPlugin([
         { from: 'src/static/images', to: 'static/images' },
         { from: 'src/static/assets'}]
      ),
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: "main.css"
      }),
      new CleanWebpackPlugin(['dist']),
   ]
};