const path = require("path");
import Button from "./src/main";
// const Button = require(path.resolve(__dirname, "./src/main"));
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};
export default Button;
