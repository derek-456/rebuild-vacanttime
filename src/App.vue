<template>
  <div id="app">
    <!-- 头部 Header -->
    <mt-header fixed title="Vacant Time">
      <mt-button icon="back" slot="left">返回</mt-button>
    </mt-header>

    <!-- 路由切换组件展示区 view-router -->
    <router-view></router-view>

    <!-- Tabbar 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/collect">
				<span class="mui-icon mui-icon-star"></span>
				<span class="mui-tab-label">收藏</span>
			</router-link>
			<router-link class="mui-tab-item" to="/user">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>

<style lang="less">
  #app{
    padding-top: 40px;
    padding-bottom: 50px;
  }
</style>
