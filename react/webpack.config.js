const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        // Handle CSS files
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          {
            loader: "postcss-loader",
            //   options: {
            //     postcssOptions: {
            //       plugins: ["postcss-preset-env"],
            //     },
            //   },
          },
        ],
      },
      {
        // Handle Image files
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "./" },
        // { from: "other", to: "public" },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
