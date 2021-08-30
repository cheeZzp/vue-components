import ZSwitch from "./src/main";
// import Select from 'ant-design-vue/es/Select/index'
ZSwitch.install = function (Vue) {
  Vue.component(ZSwitch.name, ZSwitch);
};
export default ZSwitch;
