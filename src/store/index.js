import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
    // token: window.sessionStorage.getItem("token"),
    token:'',
		userId: "",
	},
	mutations: {
		login(state, data) {
			state.token = data;
      window.sessionStorage.setItem("token", data);
      // console.log('change success')
		},
		userId(state, data) {
			state.userId = data;
      window.sessionStorage.setItem("userId", data);
      // console.log("change success");
		},
	},
	actions: {
		UserLogin({ commit }, data) {
			commit("login", data);
		},
		UserId({ commit }, data) {
			commit("userId", data);
		},
	},
	modules: {},
});
