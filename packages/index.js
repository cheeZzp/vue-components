import Button from "./Button/index";
import Alert from "./Alert/index";
import Input from "./Input/index";
import Radio from "./Radio/index";
import Select from "./Select/index";
import DatePicker from "./DatePicker/index";
// import Modal from "./Modal/index";
import Switch from "./Switch/index";
import Steps from "./Steps/index";

// import { default as message } from "ant-design-vue/es/message/index";
// import { default as Modal } from "ant-design-vue/es/Modal/index";

const components = [
  Button,
  Alert,
  Input,
  Radio,
  Select,
  DatePicker,
  // Modal,
  Switch,
  Steps,
];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  // Vue.prototype.$message = message;
  // Vue.prototype.$confirm = Modal.confirm;
};

export default {
  version: "0.1.0",
  install,
  ...components,
};
