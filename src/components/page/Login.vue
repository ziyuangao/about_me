<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">中创合视后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="account">
                    <el-input v-model="ruleForm.account" placeholder="用户名">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                    </el-input>
                </el-form-item>
                <!-- <el-form-item style="margin-bottom: 0;">
                  <el-checkbox v-model="checked"></el-checkbox><span @click="showdialog = true" style="cursor: pointer;color: #fff;">《用户协议》</span>
                </el-form-item> -->
                <div class="login-btn">
                    <!-- <el-button type="primary" :disabled="!checked"  @click="submitForm('ruleForm')">登录</el-button> -->
                    <el-button type="primary"  @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <p class="login-tips">Tips : 忘记密码请联系管理员重置密码。</p>
            </el-form>
        </div>
        <!-- <el-dialog title="用户协议" :visible="showdialog" width="900px" @close="showdialog = false">
          <div class="" v-html="agreement">
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="showdialog = false" size="small">关 闭</el-button>
          </div>
        </el-dialog> -->
    </div>
</template>

<script>
import {post} from '@/actions/axios.js'
    export default {
        name: 'login',
        data: function(){
            return {
                checked: false,
                ruleForm: {
                    account: undefined,
                    password: undefined
                },
                rules: {
                    account: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                showdialog: false,
                agreement: "",
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let obj = {...this.ruleForm}
                        post('/home/login',obj,res=>{
                            this.$router.push({
                                path:'/lol'
                            })
                        })
                    } else {
                        return false;
                    }
                });
            },
        },
        mounted() { //页面加载完之后
        },
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
        background-image: url(../../assets/login-bg.jpg);
        background-size: cover;
    }
    .ms-title{
        width:100%;
        line-height: 50px;
        text-align: center;
        font-size:20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:350px;
        margin:-190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(0,0,0, 0.3);
        overflow: hidden;
    }
    .ms-content{
        padding: 30px 30px;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
        margin-bottom: 10px;
    }
    .login-tips{
        font-size:12px;
        line-height:30px;
        color:#fff;
    }
</style>
