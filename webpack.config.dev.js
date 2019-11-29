const webpack = require("webpack"); // using Node's CommonJS syntx since Node doesn't support ES module yet. Alternatively, you could also use babel-node to transpile your code for Node.
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  // Again, using a CommonJS style export here since we're working in Node, We'll use ES modules later when in React
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", // source map for debugging. Remember, source maps let us see our origional code when debugging in the browser.
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
