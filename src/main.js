import Vue from 'vue'

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "./lib/mui/css/mui.min.css"



import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// 导入 vue-preview
import VuePreview from "vue-preview";



// 导入moment 包格式化时间
import moment from 'moment'
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment().format(pattern)
})

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueResource)
// defalut install
Vue.use(VuePreview);

Vue.http.options.root = './data'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
