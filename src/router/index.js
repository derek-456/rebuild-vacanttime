import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

// 导航守卫跳转失败
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
// 	if (onResolve || onReject) {
// 		return originalPush.call(this, location, onResolve, onReject);
// 	}
// 	return originalPush.call(this, location).catch((err) => err);
// };

// 导入路由对应组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import CollectContainer from "../components/tabbar/CollectContainer.vue";
import UserContainer from '../components/tabbar/UserContainer.vue'
import MovieList from '../components/movieList/MovieList.vue'
import MovieInfo from '../components/movieList/MovieInfo.vue'
import login from '../components/login.vue'


const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		component: HomeContainer,
	},
	{
		path: "/login",
		component: login,
	},
	{
		path: "/collect",
		component: CollectContainer,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/user",
		component: UserContainer,
	},
	{
		path: "/home/movie",
		component: MovieList,
	},
	{
		path: "/home/movie/movieList/movieInfo/:id",
		component: MovieInfo,
	},
	{
		path: "/collect/movie/movieList/movieInfo/:id",
		component: MovieInfo,
	},
];

const router = new VueRouter({
	routes,
	linkActiveClass: "mui-active",
});

router.beforeEach((to, from, next) => {
	// ...
	let token = store.state.token;
	if(to.meta.requiresAuth){
		if(token){
			next();
		}else{
			next({
				path: "/login",
				query: { redirect:to.fullPath}
			})
		}
	}else{
		next()
	}
});

export default router
