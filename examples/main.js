import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import zUI from "../packages/index"

Vue.config.productionTip = false;

Vue.use(zUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
