<template>
    <div class="container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="container-hd">
            <div class="hd-left">
                <img :src=info.post_url alt />
            </div>
            <div class="hd-right">
                <h2>{{info.name}}({{info.time}})</h2>
                <h4>{{info.EnName}}</h4>
                <div class="type">{{info.type}}</div>
                <mt-button :class="{btn1:btnChange}" type="primary" @click="addToCollect">想看</mt-button>
                <mt-button type="primary">在看</mt-button>
                <mt-button type="primary">看过</mt-button>
            </div>
        </div>
        <div class="introduce">
            <h5>简介</h5>
            <p :class="{close:flag}">{{info.discraption}}</p>
            <mt-button plain class="open" @click="flag=!flag">展开</mt-button>
        </div>

        <!-- 缩略图 -->
        <div class="thumbs">
            <h3>剧照{{info.cmt}}</h3>
            <vue-preview :slides="preList" @close="handleClose"></vue-preview>
        </div>

        <!-- 评论框 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
import {request} from '../../network/request.js'

export default {
    data() {
        return {
            id: this.$route.params.id,
            flag: true,
            info: {},
            preList: [],
            ballFlag: false,
            btnChange:false
        };
    },
    created(){
        this.getThumbs();
    },
    methods: {
        getThumbs(){
            // this.$http.get('all/movie/'+ this.id +'.json').then(result=>{
            //     this.info = result.body[0];
            //     this.preList = result.body[0].preList;
            // })
            request({
                url: "/all/movie/" + this.id +".json"
            }).then(res=>{
                // console.log(res)
                this.info = res[0];
                this.preList = res[0].preList; 
            })
        },
        handleClose () {
            console.log('close event')
        },
        addToCollect(){
            if(this.$store.state.token){
                if(!this.btnChange){
                    this.ballFlag = !this.ballFlag;
                }
                this.btnChange = !this.btnChange;
            }else{
                this.$router.push({path:'/login',query:{redirect:this.$route.path}})
                // console.log(this.$route)
            }
        },
        beforeEnter(el){
			el.style.transform = 'translate(0,0)';
		},
		enter(el,done){
            el.offsetHeight
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
			el.style.transition = 'all 1s cubic-bezier(.4,-0.3,.1,.68)';
			done();
		},
		afterEnter(el){
			this.ballFlag = !this.ballFlag;
		}
        // beforeEnter(el){
        //     // el.style.transform = "translate(0,0)";
        //     el.style.transform = "translate(0,0)"
        // },
        // enter(el,done){
        //     el.offsetWidth;
        //     el.style.transform = "translate(30px,485px)";
        //     el.style.trasition = "all 3s ease";
        //     done();
        // },
        // afterEnter(el){
        //     this.ballFlag = !this.ballFlag;
        // }
    },
    components: {
        "comment-box": comment,
    },
};
</script>

<style lang="less" scoped>
.container {
    background-color: rgba(228, 216, 216, 0.849);

    .container-hd {
        display: flex;
        justify-content: center;
        padding: 20px 10px;

        .hd-left {
            flex: 1;

            img {
                width: 100px;
                height: 140px;
                border-radius: 5px;
            }
        }
        .hd-right {
            flex: 2;
            h2 {
                font-size: 24px;
            }
            h4 {
                font-weight: 400;
                font-size: 14px;
            }
            .type {
                margin: 10px 0 20px;
                font-size: 13px;
            }
            .mint-button {
                height: 25px;
                line-height: 25px;
                font-size: 14px;
                margin: 0 5px;
                background-color: #fff;
                color: black;
            }
            .mint-button.btn1{
                background-color: red;
            }
        }
    }
    .introduce{
        margin-bottom: 40px;
        h5{
            font-size: 18px;
            font-weight: 600;
            color: black;
            padding-left: 10px;
        }
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 0;
            text-indent: 2em;
        }
        p.close{
             display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 0;
            -webkit-line-clamp: 4;
        }
        .open{
            border: 0;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            float: right;
            margin-bottom: 40px;
        }
    }

    .thumbs {
        /deep/ .my-gallery{   //deep深层作用选择器
            display: flex;
            flex-wrap:wrap;//默认换行
            justify-content: space-around;
            figure{
                width: 45%;
                margin: 5px;
                img{
                    width: 100%;
                    box-shadow: 0 0 8px #999;
                    border-radius: 5px;
                }
            }
        }
        h3{
            padding-left: 10px;
        }
    }

    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 999;
        top: 140px;
        left: 150px;
    }
}
</style>