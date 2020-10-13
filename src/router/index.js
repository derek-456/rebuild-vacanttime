import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入路由对应组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import CollectContainer from "../components/tabbar/CollectContainer.vue";
import UserContainer from '../components/tabbar/UserContainer.vue'
import MovieList from '../components/movieList/MovieList.vue'
import MovieInfo from '../components/movieList/MovieInfo.vue'


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
		path: "/collect",
		component: CollectContainer,
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
    	component: MovieInfo
	},
];

const router = new VueRouter({
	routes,
	linkActiveClass: "mui-active",
});

export default router
