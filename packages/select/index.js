import ZSelect from './src/main';
// import Select from 'ant-design-vue/es/select/index'
ZSelect.install = function (Vue) {
    Vue.component(ZSelect.name,ZSelect)
    // Vue.component(ZSelect.name + "Option",Select.Option)
    // Vue.component(Select.OptGroup.name,Select.OptGroup)
};
export default ZSelect;