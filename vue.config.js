const DEV_CONFIG = {
  pages: {
    index: {
      entry: "examples/main.js",
    },
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
    externals: {
      vue: {
        root: "Vue",
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
      },
      moment: "moment",
      antd: "ant-design-vue",
    },
  },
};
module.exports = BUILD_CONFIG;
// process.env.NODE_ENV === "development" ? DEV_CONFIG : BUILD_CONFIG;
