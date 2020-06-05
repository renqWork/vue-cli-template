import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Cookies from "js-cookie";

import "./permission"; // permission control
import './icons' // icon


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
console.log(process.env.NODE_ENV )
console.log(process.env.VUE_APP_MOCKDATA )
if (process.env.VUE_APP_MOCKDATA === 'true') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI, {
  size: Cookies.get("size") || "medium", // set element-ui default size
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

/* eslint-disable */
// debugger;
