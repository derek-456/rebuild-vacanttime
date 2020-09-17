import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入路由对应组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import CollectContainer from "../components/tabbar/CollectContainer.vue";
import UserContainer from '../components/tabbar/UserContainer.vue'


const routes = [
  {
    path: "/", redirect: "/home"
  },
	{
		path: "/home", component: HomeContainer
  },
  {
    path: "/collect", component: CollectContainer
  },
  {
    path: "/user", component: UserContainer
  }
];

const router = new VueRouter({
  routes
})

export default router
