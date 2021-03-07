const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  devServer: {
    contentBase: "./gateway/",
    inline: false,
    watchContentBase: true,
    compress: true,
    host: "0.0.0.0",
    port: 8080,
  },
});
