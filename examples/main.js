import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueComponents from "../dist/vue-components.common";
import "../dist/vue-components.css";
// import vueComponents from "../packages/index";

Vue.config.productionTip = false;

Vue.use(vueComponents);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
