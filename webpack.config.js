const path = require("path");

//vue-loader
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { join } = path;

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

function moduleOf(dir) {
  return resolve("./node_modules");
}

module.exports = {
  mode: "production",
  entry: {
    app: ["./packages/index.js"],
  },
  output: {
    path: resolve("./pack"),
    filename: "zicon-ui.common.js",
    publicPath: "/dist/",
    chunkFilename: "[id].js",
    library: "ZICONUI", //package name
    libraryExport: "default",
    libraryTarget: "commonjs2",
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": __dirname + "/packages",
      "@ant-design/icons/lib/dist$": resolve("./examples/icons.js"),
    },
    extensions: [".mjs", ".js", ".vue", ".json", ".wasm"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules|utils\/popper\.js|utils\/date\.js/,
        loader: "babel-loader",
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false,
                whitespace: "condense",
              },
              cacheDirectory: moduleOf(".cache/vue-loader"),
              cacheIdentifier: "169621da",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: path.posix.join("static", "[name].[hash:7].[ext]"),
        },
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:7].css",
    }),
  ],
};
