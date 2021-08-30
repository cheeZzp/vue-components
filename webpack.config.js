const path = require("path");
// const fs = require("fs");
// const webpack = require("webpack");

//vue-loader
// const VueLoaderPlugin = require("vue-loader-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
// const VueLoaderPlugin = require(__dirname +
//   "node_modules\\vue-loader-plugin\\index.js");

const { join } = path;

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

function moduleOf(dir) {
  return resolve("./node_modules");
}

module.exports = {
  mode: "production",
  context: __dirname,
  // node: {
  //   setImmediate: false,
  //   process: "mock",
  //   dgram: "empty",
  //   fs: "empty",
  //   net: "empty",
  //   tls: "empty",
  //   child_process: "empty",
  // },
  entry: resolve("./packages/index.js"),
  output: {
    path: __dirname + "/pack",
    filename: "js/[name].js",
    publicPath: "/",
    chunkFilename: "js/[name].js",
    library: "ZiconUI", //package name
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
      "@": "D:\\GitHubProjects\\vue-components\\examples",
    },
    extensions: [".mjs", ".js", ".vue", ".json", ".wasm"],
    modules: ["node_modules", resolve("./node_modules"), resolve("./packages")],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () {
          /* omitted long function */
        },
        moduleLoader: function () {
          /* omitted long function */
        },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          },
        },
        bind: function () {
          /* omitted long function */
        },
        tsLoaderOptions: function () {
          /* omitted long function */
        },
        forkTsCheckerOptions: function () {
          /* omitted long function */
        },
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", resolve("./node_modules")],
  },
  module: {
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: moduleOf("cache-loader/dist/cjs.js"),
            options: {
              cacheDirectory: moduleOf(".cache/vue-loader"),
              cacheIdentifier: "169621da",
            },
          },
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                whitespace: "condense",
              },
              cacheDirectory: moduleOf(".cache/vue-loader"),
              cacheIdentifier: "169621da",
            },
          },
        ],
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules[\\/]core-js/,
        use: [
          // {
          //   loader: moduleOf("cache-loader/dist/cjs.js"),
          //   options: {
          //     cacheDirectory: moduleOf(".cache/babel-loader"),
          //     cacheIdentifier: "c97404fc",
          //   },
          // },
          // {
          //   loader: moduleOf("thread-loader/dist/cjs.js"),
          // },
          // {
          //   loader: moduleOf("babel-loader/lib/index.js"),
          // },
          {
            loader: moduleOf("babel-loader"),
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  // plugins: [new VueLoaderPlugin()],
  plugins: [new VueLoaderPlugin(), new CaseSensitivePathsPlugin()],
};
