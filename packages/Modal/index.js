import Modal from "./src/main";

// import { default as Modal } from 'ant-design-vue/es/Modal/index'
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal);
};
export default Modal;
