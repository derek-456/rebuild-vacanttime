import Vue from 'vue'

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "./lib/mui/css/mui.min.css"



import App from './App.vue'
import router from './router'
import store from './store'
// import VueResource from 'vue-resource'
import axios from "axios";
import VueAxios from "vue-axios";

// 导入 vue-preview
import VuePreview from "vue-preview";




// 导入moment 包格式化时间
import moment from 'moment'
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment().format(pattern)
})

//全部导入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);



Vue.config.productionTip = false
Vue.use(MintUI);
// Vue.use(VueResource)
// defalut install
Vue.use(VuePreview);
Vue.use(VueAxios, axios);

// Vue.http.options.root = './data'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
