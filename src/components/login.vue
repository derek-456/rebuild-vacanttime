<template>
    <div id="login">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登陆" name="first">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
                    <el-form-item label="ID" prop="id">
                        <el-input v-model.number="ruleForm.id"></el-input>
                    </el-form-item>
                    <el-form-item label="PW" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">注册</el-tab-pane>
        </el-tabs>
        
    </div>
    
</template>

<script>
//引入axios
import { request } from "../network/request.js";
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        activeName: 'first',
        ruleForm: {
          pass: '',
          id: '',
          checkPass: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          id: [
            {  type: 'date',required: true, message: '请输入用户名', trigger: 'blur' },
            // { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            request({
              url:'/'+this.ruleForm.id+'/login/login.json',
              data:{id:123,pass:123}
            }).then(res=>{
              if(res.status === "success"){
                this.$message({
                  type:'success',
                  message:"登入成功",
                  duration:1000,
                  offset: 150,
                  center:true
                })
                let token = res.token;
                let userId = res.id;
                //存储在localstorage 和 store中,记得传参
                this.$store.dispatch('UserLogin',token);
                this.$store.dispatch('UserId',userId);
                // console.log(this.$route.query)
                setTimeout(()=>{
                  this.$router.push(this.$route.query.redirect)
                },1000)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClick(tab, event) {
      }
    }
}
</script>

<style lang="less" scoped>
#login{
    margin-top: 40px;
    padding-left: 10px;
    
}

.el-form.demo-ruleForm{
    text-align: center;

     .el-input{
         width: 80%;
     }
    .el-button+.el-button{
        margin-left: 40px;
    }
    
}

</style>