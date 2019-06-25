<template>
    <div>
        <el-dialog title="添加装备" :visible.sync="config.dialogFormVisible">
            <el-form :model="config.form" label-width='100px' status-icon ref="ruleForm" >
                <el-form-item label="装备名称" prop='name' :rules="[{ required: true, message: '请输入装备名称', trigger: 'blur' }]" >
                    <el-input  v-model="config.form.name" placeholder="请输入装备名称" clearable ></el-input>
                </el-form-item>
                <el-form-item label="装备图标" prop='img' :rules="[{ required: true, message: '请上传装备图标', trigger: 'blur' }]"  >
                   <el-upload
                        class="avatar-uploader"
                        action="http://localhost:9999/upload/img"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :on-remove="handleRemove"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="config.form.img" :src="config.form.img" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="装备属性" prop='attr' :rules="[{ required: true, message: '请输入装备属性', trigger: 'blur' }]">
                    <el-input v-model="config.form.attr" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入装备属性" clearable></el-input>
                </el-form-item>
                <el-form-item label="获得方式" prop='made' :rules="[{ required: true, message: '请选择获得方式', trigger: 'blur' }]">
                    <el-radio-group v-model="config.form.made">
                        <el-radio :label="1">随机掉落</el-radio>
                        <el-radio :label="2">手动合成</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="合成规则" v-show="config.form.made == 2" :prop="'partOne'+'partTow'" :rules="[{ required: config.form.made == 2 ? true : false, message: '请选择合成规则', trigger: 'blur' }]" >
                    <el-row>
                        <el-col :span='8' >
                            <el-select v-model="config.form.partOne" clearable >
                                <el-option v-for="(item,index) in list" :key="index" :label='item.name' :value="item.id" ></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span='2' >+</el-col>
                        <el-col :span='8' >
                            <el-select v-model="config.form.partTwo" clearable >
                                <el-option v-for="(item,index) in list" :key="index" :label='item.name' :value="item.id" ></el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button @click="config.dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
import {post} from '@/actions/axios.js'
export default {
    props:['config'],
    data(){
        return{
            list:[{name:1,id:1},{name:2,id:2}]
        }
    },
    methods:{
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let obj = {...this.config.form}
                    post('/lol/addEquipment',obj,res=>{
                        if (res.statusCode == 200) {
                            this.config.onOK()
                        }
                    })
                } else {
                    return false;
                }
            });
        },
        handleAvatarSuccess(res, file) {
            this.$set(this.config.form,'img',res.url)
        },
        handleRemove(file, fileList){
            this.config.form.img = undefined
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>