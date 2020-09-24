<template>
    <div class="digitalModel">
        <div class="digitalModel_warp">
            <el-row>
                <el-col :span="2" :offset="22" ><el-button type="text" @click="forTest"  plain>试试</el-button></el-col>
            </el-row>
        </div>
        <el-row>
            <el-col :span='3' v-for="(item,index) in numList" :key="index" :offset="index == 5 ? 3 : 0">{{item}}</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'digitalModel',
    data(){
        return {
            numList:[],
        }
    },
    methods:{
        forTest(){
            return false
        },
        test(){
            // [01,02,03,04,05,06,07]
            // let arr1 = Array.from({ length: num1 }, (_, index) => index+1);//[1~35]
            // let arr2 = Array.from({ length: num2 }, (_, index) => index+1);//[1~12]
            // []  []
            
            let obj = {arr1:[],arr2:[]},_this = this,partLeft,partRight;
            partLeft = new Promise((resolve,reject)=>{
                var x;
                for(var i = 0;i<5;i++){
                    x = _this.random(35,1);
                    if(obj.arr1.indexOf(x) == -1){
                        obj.arr1.push(x)
                    }else{
                        i--;
                    }
                }
                resolve(obj.arr1)
            })
            partRight = new Promise((resolve,reject)=>{
                var y;
                for(var k = 0;k<2;k++){
                    y = _this.random(12,1);
                    if(obj.arr2.indexOf(y) == -1){
                        obj.arr2.push(y)
                    }else{
                        k--;
                    }
                }
                resolve(obj.arr2)
            })
            Promise.all([partLeft,partRight]).then(data=>{
                data.forEach(item=>{
                    item.sort((a,b)=>a-b)
                })
                data.forEach(item=>{
                    item.forEach(k=>{
                        if(k < 10){
                            k = ('0' + k.toString())
                        }
                    })
                })
                console.log([...data])
            })
        },
        random(max,min){//包含最小数
            return Math.floor(Math.random()*(max-min+1)+min)
        }
    },
    mounted(){
        this.test();
    }
}
</script>

<style scoped>
.digitalModel{
    text-align: center;
}
.digitalModel_warp{
    width: 100%;
    background: rgba(255, 255, 255, 1);
}
</style>