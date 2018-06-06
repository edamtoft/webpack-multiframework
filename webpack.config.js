const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    "sample-react-app": "./source/sample-react-app/index.jsx",
    "sample-vue-app": "./source/sample-vue-app/index.js"
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [ ".vue", ".js", ".jsx" ],
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "shared": path.resolve("./source/shared")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};