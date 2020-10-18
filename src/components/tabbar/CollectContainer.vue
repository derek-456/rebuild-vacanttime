<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in movieList" :key="item.id">
                <router-link :to="'/collect/movie/movieList/movieInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" v-lazy="item.post_url" />
                    <div class="mui-media-body">
                        <h1>{{item.name}}</h1>
                        <p class="mui-ellipsis">
                            <span>上映时间：{{item.time}}年</span>
                            <span>推荐排名：top{{item.id}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { request } from "../../network/request.js";

export default {
    data(){
        return {
            movieList: []
        }
    },
    created() {
        this.getMovieList();
    },
    methods: {
        getMovieList() {
            request({
                url: "/movie_index.json"
            }).then( res =>{
                // console.log(res)
                this.movieList = res;
            })
        },
    },
}
</script>

<style lang="less">
    .mui-table-view {
    li {
        // background-color: #ccc;
        .mui-media-object {
            max-width: 90px;
            width: 90px;
            height: 120px;
            background-color: #ccc;
        }

        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: gray;
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
        }
    }
}
</style>