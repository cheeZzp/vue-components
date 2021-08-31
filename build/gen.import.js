const path = require("path");
const fs = require("fs");

const _dirs = fs.readdirSync("./packages");

// function firstToUpper(str) {
//   return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
// }
//生成  import from ant-design-vue 文件
let IMPORT_CONTENT = 'import Vue from "vue"; \nimport { ';
let USE_CONTENT = "";
const _dirs_len = _dirs.length;
_dirs.forEach((item, index) => {
  if (!/js?$/.test(item)) {
    IMPORT_CONTENT += item + ",";
    USE_CONTENT += "Vue.use(" + item + ");\n";
  }
  if (_dirs_len === index + 1) {
    console.log("file generation completed");
    IMPORT_CONTENT += '} from "ant-design-vue";\n';
  }
});

const PACK_DIR = path.resolve(__dirname, "../pack");
fs.access(PACK_DIR, fs.constants.F_OK, (e) => {
  console.log("callback of access");
  if (e) {
    console.log(`mkdir:${PACK_DIR}`);
    try {
      fs.mkdirSync(path.resolve(__dirname, "../pack"));
    } catch (e) {
      if (e.code === "EEXIST") console.log("director exist");
    }
  }
  fs.writeFileSync(
    path.resolve(__dirname, "../pack/elements.js"),
    IMPORT_CONTENT + USE_CONTENT
  );
});
