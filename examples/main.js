import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueComponents from "../lib/vue-components.common";
import "../lib/vue-components.css";
// import vueComponents from "../packages/index";
// import "../lib/vue-components.css";

Vue.config.productionTip = false;

Vue.use(vueComponents);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
