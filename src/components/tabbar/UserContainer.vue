<template>
    <div>
        <ul class="userInfo">
            <li><img :src="userImg" alt /></li>
            <li><div class="mui-media-body">{{userId}}</div></li>
        </ul>

        <!-- list区域 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">联系客服</a>
            </li>
            <li class="mui-table-view-cell">
               <a class="mui-navigate-right">设置</a>
            </li>
        </ul>

        <!-- 登出 -->
        <button 
        v-if="status" 
        type="button" 
        class="mui-btn mui-btn-success mui-btn-outlined"
        @click="login">登陆</button>
        <button 
        v-else  
        type="button" 
        class="mui-btn mui-btn-success mui-btn-outlined"
        @click="logout">注销登陆</button>
           
    </div>
</template>

<script>
let A = require("../../img/animationico.jpg");
let B = require("../../img/teleplayico.jpg")
export default {
    data(){
        return{
            userImg: A,
            userId: "用户名",
            status: true,
            UserInfo:''
        }
    },
    created(){
        if(this.$store.state.token){
            // console.log(this.$store.state.userInfo)
            this.gbUserInfo()
        }
    },
    methods:{
        login(){
            this.$router.push({
                path:'/login',
                query: {redirect:this.$route.path}
            })
        },
        gbUserInfo(){
            this.UserInfo = this.$store.state.userInfo ;
            this.userImg = B;
            this.userId = this.UserInfo.id;
            // console.log(this.userId)
            this.status = false; 
        },
        logout(){
            this.$store.dispatch("UserLogout");
            //利用token 来确定我的页面显示。登出后刷新页面来重新回到无token前页面
            this.$router.go(0)
        }
    },
   
}
</script>

<style lang="less">
.userInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 250px;
    padding: 0;
    margin: 10px 0;
    list-style: none;
    li{
        width: 100%;
        text-align: center;
        &:last-child{
            margin-top: 20px;
        }
        img{
            width: 100px;
            height: 90px;
        }
        div{
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 2px;
        }
    }
}

.mui-btn.mui-btn-success.mui-btn-outlined{
    width: 100%;
    font-size: 20px;
    margin: 40px 0;
}

</style>