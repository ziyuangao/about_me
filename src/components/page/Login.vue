<template>
    <div class="login">
        <el-row>
            <el-form :model="loginForm" ref="loginForm" label-width="0px"   status-icon class="loginForm" > 
                <el-form-item prop="name" :rules="[{ required: true, message: '请输入邮箱', trigger: 'blur' }, 
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]" >
                    <el-input v-model="loginForm.name" placeholder="邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="passwd" :rules="{required: true, message: '密码不能为空', trigger: 'blur' }" >
                    <el-input v-model="loginForm.passwd" placeholder="密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-button size="mini" @click="forgetPasswd = true" >忘记密码</el-button>
                            </el-col>
                            <el-col :span="8">
                                <el-button size="medium" type="primary" @click="login('loginForm')" :disabled="false" >登陆</el-button>
                            </el-col>
                            <el-col :span="8">
                                <el-button @click="dialogFormVisible = true" >注册</el-button>
                            </el-col>
                        </el-row>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-row>
        <el-dialog title="注册账号" :visible.sync="dialogFormVisible" class="signInForm" width="30%"   >
            <el-form :model="signInForm" ref="signInForm" label-width="100px" status-icon :rules="signInRules" >
                <el-form-item prop="name"  label="邮箱账号" >
                    <el-input v-model="signInForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="passwd" label="密码">
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">请填写8~16位密码<br/>不能包含空格</div>
                        <el-input v-model="signInForm.passwd" type="password"  autocomplete="off" maxlength="16" minlength="8" ></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item prop="checkPass" label="确认密码">
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">请再次输入密码</div>
                        <el-input v-model="signInForm.checkPass" type="password"  autocomplete="off" maxlength="16" minlength="8" ></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item prop="code" label="安全码" >
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">安全码用来找回密码<br/>推荐使用身份证</div>
                        <el-input v-model="signInForm.code" autocomplete="off" minlength="6"></el-input>
                    </el-tooltip>
                </el-form-item>
            </el-form>
            <div>
                <el-checkbox v-model="agree"  ><a >我已阅读并同意相关服务条款和隐私政策</a></el-checkbox>
                <div  class="red font18"> * 请务必保管好您的安全码!</div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" :disabled="!agree"  @click="signIn('signInForm')">确 定</el-button>
            </div>
        </el-dialog>
        <!-- <el-dialog title="忘记密码" :visible.sync="forgetPasswd" class="signInForm" width="30%"   >
            <el-form :model="signInForm" ref="signInForm" label-width="100px" status-icon :rules="signInRules" >
                <el-form-item prop="name"  label="邮箱账号" >
                    <el-input v-model="signInForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="passwd" label="密码">
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">请填写8~16位密码<br/>不能包含空格</div>
                        <el-input v-model="signInForm.passwd" type="password"  autocomplete="off" maxlength="16" minlength="8" ></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item prop="checkPass" label="确认密码">
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">请再次输入密码</div>
                        <el-input v-model="signInForm.checkPass" type="password"  autocomplete="off" maxlength="16" minlength="8" ></el-input>
                    </el-tooltip>
                </el-form-item>
                <el-form-item prop="code" label="安全码" >
                    <el-tooltip class="item" effect="light"  placement="top">
                        <div class="text_center" slot="content">安全码用来找回密码<br/>推荐使用身份证</div>
                        <el-input v-model="signInForm.code" autocomplete="off" minlength="6"></el-input>
                    </el-tooltip>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="forgetPasswd = false">取 消</el-button>
                <el-button type="primary" :disabled="!agree"  @click="signIn('signInForm')">确 定</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>
<script>
import { get,post } from '@/actions/axios.js'
export default {
    name:'login',
    data(){
         var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
            if (this.signInForm.checkPass !== '') {
                this.$refs.signInForm.validateField('checkPass');
            }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.signInForm.passwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            forgetPasswd:false,
            loginForm:{
                name:'ziyuan_gao@163.com',
                passwd:"a1993912A",
            },
            dialogFormVisible:false,
            signInForm:{
                name:'ziyuan_gao@163.com',
                passwd:"a1993912A",
                code:999999999,
                checkPass:"a1993912A",
            },
            agree:true,
            signInRules: {
                name: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                passwd: [
                    { validator: validatePass, message: '密码不能为空', trigger: 'blur' }
                ],
                code: [
                    {required: true , message: '安全码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login(formName){
             this.$refs[formName].validate((valid) => {
                if (valid) {
                    get('user/login',this.loginForm,(data)=>{
                        if (data.statusCode == 200) {
                            this.$message.success(data.message)
                            localStorage.setItem('user',JSON.stringify(data.data))
                            this.$router.push({path:'/home'})
                        }else{
                            this.$message.error(data.message)
                        }
                    })
                } else {
                    this.$message.error('请检查邮箱或密码')
                    return false;
                }
            });
        },
        resetForm(formName) {
           this.$refs[formName].resetFields();
        },
        signIn(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    post('user/signIn',this.signInForm,(data)=>{
                        if (data.statusCode == 200) {
                           this.$message.success(data.message)
                           this.dialogFormVisible = false;
                           this.$refs[formName].resetFields();
                        }else{
                            this.$message.error(data.message)
                        }
                    })
                }else{
                   return false; 
                }
            })
        }
    }
}
</script>
<style scoped>
.loginForm{
    width: 384px;
    margin: 0 auto;
}
.login{
    margin-top: 60px;
}
</style>

