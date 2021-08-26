const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

const { join } = path;

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  return files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, "index.js"));
    } else {
      const [name] = item.split(".");
      ret[name] = resolve(itemPath);
    }
    return ret;
  }, {});
}

const DEV_CONFIG = {
  pages: {
    index: {
      entry: "examples/main.js",
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", join(__dirname, "examples"));
  },
};

const BUILD_CONFIG_LIB = {
  outputDir: "lib",
  css: {
    extract: {
      filename: "style/[name].css",
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": resolve("./examples/icons.js"),
      },
    },
    entry: {
      ...getEntries("packages"),
    },
    output: {
      filename: "[name]/index.js",
      libraryTarget: "commonjs2",
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
    config.module.rule("js").include.add("/packages").end();
    config.entryPoints.delete("app");
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
  },
};

const BUILD_CONFIG_DIST = {
  css: {
    extract: {
      filename: "style/[name].css",
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": resolve("./examples/icons.js"),
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
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: require("./dll/manifest.json"),
      }),
    ],
  },
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.plugins.delete("copy");
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("hmr");
  },
};
module.exports = (() => {
  return process.env.NODE_ENV === "development"
    ? DEV_CONFIG
    : BUILD_CONFIG_DIST;
})();
