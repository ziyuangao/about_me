<template>
    <div>

        <el-tabs tab-position="left">
            <el-tab-pane label="大乐透">
                超级大乐透   号码生成器
                <div>
                    <el-button @click="createNumber" >本地随机生成</el-button>
                    <el-button @click='netCreate' >服务器随机生成</el-button>
                </div>
                <div>
                    <span v-if="bol" >{{localData}}</span>
                    <span v-else >{{netData}}</span>
                </div>
            </el-tab-pane>
            <el-tab-pane label="云顶之奕">
                <lol></lol>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
import {get,post} from '@/actions/axios.js'
import lol from './lol/index.vue'
export default {
    components:{
        lol
    },
    data(){
        return {
            bol:true,
            localData:undefined,
            netData:undefined,
        }
    },
    methods:{
        netCreate(){
            this.bol = false
            get('/dailyLife/createNumber',{},res=>{
                if (res.statusCode == 200) {
                    this.netData = res.data 
                }
            })
        },
        createNumber(){
            this.bol = true
            this.localData = []//初始化
            let leftPart = this.createPart({
                length:5,max:35,min:1
            })
            let rightPart = this.createPart({
                length:2,max:12,min:1
            })
            this.localData = leftPart.join()+' '+rightPart.join()
        },
        random(maxNum,minNum){
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum)//可以获取最小数
        },
        createPart(options={length,max,min}){
            let x  = undefined,arr = [];
            for(var i = 0 ; i <options.length; i++){
                x = this.random(options.max,options.min)
                if (arr.indexOf(x)<0) {
                    arr.push(x)
                }else{
                    i--
                }
            }
            return this.filterNum(arr)
        },
        filterNum(arr){
            return arr.map(item=>{
                return item < 10 ? '0'+item : item+''
            })
        }
    }
}
</script>
