<template>
  <div id="app">
    <!-- 头部 Header -->
    <mt-header fixed title="Vacant Time">
      <mt-button icon="back" slot="left" @click="goback" v-show="!flag.includes($route.path)">返回</mt-button>
    </mt-header>

    <!-- 路由切换组件展示区 view-router -->
   <transition>
      <router-view></router-view>
   </transition>

    <!-- Tabbar 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/collect">
				<span  class="mui-icon mui-icon-star" id="badge"></span>
				<span class="mui-tab-label">收藏</span>
			</router-link>
			<router-link class="mui-tab-item" to="/user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
export default {
  data(){
    return{
      flag:['/', '/home','/collect','/user']
    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  #app{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

  .mint-header.is-fixed {
    z-index: 2;
  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
    right: 0;
    left: 0;
  }

  .v-enter-active,.v-leave-active{
    transition: all 0.2s ease;
    // display: none;
  }

  .v-leave-active{
    display: none;
  }

</style>
