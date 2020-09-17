<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item.post_url">
                <img :src="item.post_url" alt />
            </mt-swipe-item>
        </mt-swipe>

        <!-- 四宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/movieico.jpg" alt />
                    <div class="mui-media-body">电影</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/animationico.jpg" alt />
                    <div class="mui-media-body">动漫</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/teleplayico.jpg" alt />
                    <div class="mui-media-body">电视剧</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/bookico.jpg" alt />
                    <div class="mui-media-body">读书</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList: []
        };
    },
    created() {
        this.getBannerList();
    },
    methods: {
        getBannerList() {
            this.$http.get("./data/banner_index.json").then((result) => {
                this.bannerList = result.body;
                console.log(this.bannerList);
            });
        },
    },
};
</script>

<style lang="less">
.mint-swipe {
    width: 100%;
    height: 200px;

    .mint-swipe-item {
        background: url(../../img/waitting.gif) no-repeat center center
            rgb(231, 229, 229);

        img {
            width: 375px;
            height: 200px;
        }
        // .full {
        //     width: 100%;
        // }
    }
}
.mui-table-view.mui-grid-9 {
    img {
        width: 100px;
        height: 90px;
        border-radius: 50%;
    }
    .mui-media-body {
        font-size: 15px;
        font-weight: 600;
    }
}
</style>