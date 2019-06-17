<template>
    <div class="nav">
        <el-row>
            <el-col  :span="2" :offset="4" >
                <div class="logo" >高</div>
            </el-col>
            <el-col :span="14" :offset="4" >
                <el-row>
                    <el-col v-for="(item,index) in navList" :key="index"  :span="3">
                        <el-button  @click="goToWhere(item.path)" >{{item.name}}</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import {get,post} from '@/actions/axios.js'
export default {
    name:'ahead',
    data(){
        return {
            navList:[],
        }
    },
    methods:{
        getNavList(){
            get('/home/getNavList','',data=>{
                if (data.statusCode==200) {
                    this.navList = data.data
                }
            })
        },
        goToWhere(where){
            this.$router.push({
                path:'/'+where,
            })
        },

    },
    mounted(){
        this.getNavList()
    }
}
</script>
<style scoped>
.nav{
    line-height: 60px;
    height: 60px;
}
.logo{
    width: 60px;
    height: 60px;
}
</style>
