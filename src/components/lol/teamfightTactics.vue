<template>
    <div class="teamfightTactics">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="S4" name="first">
                职业：<el-tag v-for="(item,index) in jobList" :type="tabIdx == 1 && curIdx == index ? 'danger' : 'success' "  :key="item.id" v-text="item.job" @click="chooseLuck(item,1,index)" effect="dark" ></el-tag>
                <el-divider></el-divider>
                特质：<el-tag v-for="(item,index) in typeList" :type="tabIdx == 2 && curIdx == index ? 'danger' : 'success' " :key="item.id" v-text="item.type" @click="chooseLuck(item,2,index)" effect="dark" ></el-tag>
                <el-divider></el-divider>
                <div>
                    <div v-for="(item,index) in newArr" :key="index+1" class="diy_box" >
                        <span v-text="'费用'+ (index+1)"></span>
                        <el-tag v-for="(k,v) in item"  :key="v+1" v-text="k.name" :type="luckMan.id == k.id ? 'danger' : 'success'" @click="luckMan=k" ></el-tag>
                    </div>
                    <div v-show="luckMan.id" v-text="`您当前选择的天选之人为：${luckMan.name}`" ></div> 
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="S2" name="second">
                <iframe src="https://101.qq.com/tft/index.shtml?ADTAG=cooperation.glzx.tft" frameborder="0" class="teamfightTactics_warp" ></iframe>
            </el-tab-pane> -->
        </el-tabs>
    </div>
</template>
<script>
import heroList from '../json/hero.json'
import jobList from '../json/jobList.json'
import typeList from '../json/typeList.json'
export default {
    name:'teamfightTactics',
    data(){
        return {
            activeName:'first',
            tabIdx:undefined,
            curIdx:undefined,
            heroList:[],
            jobList:[],
            typeList:[],
            luckMan:{},
            newArr:[],
        }
    },
    created(){//生命周期 没有dom 但是可以获取到data中的变量
        this.initDate()
    },
    methods:{
        handleClick(e){
            console.log(e.name)
        },
        initDate(){
            this.jobList = jobList;
            this.typeList = typeList;
            this.heroList = heroList;
            // [[],[],[],[],[]]

            let newArr = [[],[],[],[],[]]
            this.heroList.forEach(item=>{
                newArr[item.price-1].push(item)    
            })
            this.newArr = newArr;
        },
        chooseLuck(obj,num,index){
            this.luckMan= obj;
            this.tabIdx = num;
            this.curIdx = index;
        },
        chooseHero(obj){

        }
    }
}
</script>
<style scoped>
.teamfightTactics_warp{
    width: 100%;
    height: 838px;
    overflow: hidden;
}
.el-tag{
    margin: 0 10px;
    cursor: pointer;
}
.diy_box{
    display: flex;
    justify-content: start;
    margin: 10px 0;
}
.diy_box .el-tag{
    width: 100px;
    text-align: center;
}
</style>