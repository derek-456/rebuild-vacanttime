import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export function request(config){
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: "./data",
        timeout: 5000
    });

    //2.拦截器
    instance.interceptors.request.use( config =>{
        return config;
    }, err =>{
        console.log(err);
    })

    instance.interceptors.response.use( res =>{
        return res.data;
    }, err =>{
        console.log(err);
    })

    //发送请求
    return instance(config);
}