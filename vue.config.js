const DEV_CONFIG = {
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  }
};
const BUILD_CONFIG = {

};
module.exports = process.env.NODE_ENV === 'development' ? DEV_CONFIG : BUILD_CONFIG;
