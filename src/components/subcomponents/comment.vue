<template>
    <div class="cmt-container">
        
        <textarea placeholder="随便BB" maxlength="120" v-model="msg"></textarea>

        <mt-button type='primary' size="large" @click.native="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item , i) in commentList" :key="item.add_time">
                <div class="cmt-title">
                    用户：{{item.user_name}} <span>第{{i+1}}楼</span>
                    <p>发表时间：{{item.add_time | dataFormat }}</p>  
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type='danger'  size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex: 1,
            commentList: [],
            msg: ''
        }
    },
    created(){
        this.getComments()
    },
    methods: {
        getComments(){
            this.$http.get("comments/movie/" + this.id +"/pageindex=" 
            + this.pageIndex +".json").then(result=>{
                this.commentList = this.commentList.concat( result.body );
            })
        },
        getMore(){
            this.pageIndex++;
            if(this.pageIndex<=2){
                this.getComments();
            }else{
                Toast('没有更多了');
            }
        },
        postComment(){
            // 校验是否为空
            if(this.msg.trim().length === 0){
                return Toast('评论不能为空');
            }

            // this.$http.post("comments/movie/" + this.id +"/pageindex=" 
            // + this.pageIndex +".json", { content: this.msg.trim()}).then(result =>{

            // })
            var cmt = {
		        "user_name": "匿名用户",
	        	"add_time": Date.now(),
		        "content": this.msg.trim()
            }
            this.commentList.unshift(cmt);
            this.msg = '';
        }
    },
    props: ['id']
}
</script>

<style lang="less" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                .cmt-title{
                    background-color: #ccc;
                    font-size: 13px;
                    line-height: 30px;

                    span{
                        float: right;
                        padding-right: 20px;
                    }
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>