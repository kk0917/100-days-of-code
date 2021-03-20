const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./gateway/"),
    inline: true,
    hot: true,
    liveReload: true,
    compress: true,
    host: "0.0.0.0",
    port: 8080
  }
});
