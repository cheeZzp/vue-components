import ZSwitch from './src/main';
// import Select from 'ant-design-vue/es/select/index'
ZSwitch.install = function (Vue) {
    Vue.component(ZSwitch.name,ZSwitch)
};
export default ZSwitch;