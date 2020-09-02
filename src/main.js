import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./styles.scss";

Vue.use(ElementUI);

Vue.config.productionTip = false;

import "../public/ueditor/ueditor.config.js";
import "../public/ueditor/ueditor.all.js";
import "../public/ueditor/lang/zh-cn/zh-cn.js";
import "../public/ueditor/ueditor.parse.js";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
