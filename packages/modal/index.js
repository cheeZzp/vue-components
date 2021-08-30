import Modal from "./src/main";

// import { default as modal } from 'ant-design-vue/es/modal/index'
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal);
};
export default Modal;
