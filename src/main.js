/*
 * @Date: 2020-07-30 11:25:44
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-07-30 11:50:30
 */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@vant/touch-emulator";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
