const path = require("path");
const fs = require("fs");

const _dirs = fs.readdirSync("./packages");

// function firstToUpper(str) {
//   return str.trim().toLowerCase().replace(str[0], str[0].toUpperCase());
// }

let IMPORT_CONTENT = 'import Vue from "vue"; \nimport { ';
let USE_CONTENT = "";
const _dirs_len = _dirs.length;
_dirs.forEach((item, index) => {
  if (!/js?$/.test(item)) {
    IMPORT_CONTENT += item + ",";
    USE_CONTENT += "Vue.use(" + item + ");\n";
  }
  if (_dirs_len === index + 1) {
    console.log("completed");
    IMPORT_CONTENT += '} from "ant-design-vue";\n';
  }
});
console.log(IMPORT_CONTENT + USE_CONTENT);

fs.writeFileSync(
  path.resolve(__dirname, "../pack/elements.js"),
  IMPORT_CONTENT + USE_CONTENT
);
