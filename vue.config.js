const path = require("path");

const DEV_CONFIG = {
  pages: {
    index: {
      entry: "examples/main.js",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "examples"));
  },
};
const BUILD_CONFIG = {
  pages: {
    index: {
      entry: "examples/main.js",
    },
  },
  css: {
    extract: {
      filename: "style/[name].css",
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(
          __dirname,
          "./examples/icons.js"
        ),
      },
    },
    externals: {
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
      },
      moment: "moment",
      // antd: "ant-design-vue",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "examples"));
  },
};
module.exports =
  process.env.NODE_ENV === "development" ? DEV_CONFIG : BUILD_CONFIG;
