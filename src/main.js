/*
 * @Date: 2020-07-30 11:25:44
 * @LastEditors: Future Meng
 * @LastEditTime: 2020-07-31 09:19:53
 */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 引入模块后自动生效,在桌面端自动将mouse事件转换成对应的touch事件，使得组件能够在桌面端使用。
import "@vant/touch-emulator";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
