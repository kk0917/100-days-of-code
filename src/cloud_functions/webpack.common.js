const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/cloud_functions/main.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader' // compile TypeScript
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*.js", "**/*.js.map", "!main.js"],
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./gateway/"),
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ]
  }
};
