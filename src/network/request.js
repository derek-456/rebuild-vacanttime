import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";

Vue.use(VueAxios, axios);

export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
		baseURL: "./data",
		timeout: 5000,
		headers: { "Content-Type": "application/json;charset=UTF-8" },
	});

    //2.拦截器
    instance.interceptors.request.use( config =>{
        //判断是否有token值
        if(store.state.token){
            config.headers.Authorization = `${store.state.token}`;
        }
        return config;
    }, err =>{
        console.log(err);
    })

    instance.interceptors.response.use( res =>{
        return res.data;
    }, err =>{
        console.log(err);
        console.log(err.response);
        return err
    })

    //发送请求
    return instance(config);
}