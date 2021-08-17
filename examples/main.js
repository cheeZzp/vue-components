import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import zUI from "../lib/vue-components.common";
// import "../lib/vue-components.css";
import { Button } from "ant-design-vue";
// import Button from "../packages/button/index";

Vue.config.productionTip = false;

// Vue.use(zUI);
Vue.use(Button);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
