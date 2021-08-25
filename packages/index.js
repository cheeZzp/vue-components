import "./util.js";
import Button from "./button/index";
import Alert from "./alert/index";
import Input from "./input/index";
import Radio from "./radio/index";
import Select from "./select/index";
import DatePicker from "./datepicker/index";
import Modal from "./modal/index";
import Switch from "./switch/index";
import Steps from "./steps/index";

import { default as message } from "ant-design-vue/es/message/index";
import { default as modal } from "ant-design-vue/es/modal/index";

const components = [
  Button,
  Alert,
  Input,
  Radio,
  Select,
  DatePicker,
  Modal,
  Switch,
  Steps,
];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = message;
  Vue.prototype.$confirm = modal.confirm;
};

export default {
  version: "0.1.0",
  install,
  ...components,
};
