import Vue from 'vue'

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

import "./lib/mui/css/mui.min.css"


import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
