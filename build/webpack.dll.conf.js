const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    vendor: ["ant-design-vue"],
  },
  output: {
    path: path.resolve(__dirname, "dll"),
    filename: "[name].js",
    library: "[name]_[hash]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]",
      path: path.resolve(__dirname, "dll/manifest.json"),
      //
    }),
  ],
};
