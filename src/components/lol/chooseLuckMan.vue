<template>
    <div>
        <span>职业：</span>
        <el-tag
          v-for="(item, index) in jobList"
          :type="tabIdx == 1 && curIdx == index ? '' : 'success'"
          :key="item.id"
          v-text="item.job"
          @click="chooseLuckAttr(item,index,1)"
          effect="dark"
        ></el-tag>
        <el-divider></el-divider>
        <span>特质：</span>
        <el-tag
          v-for="(item, index) in typeList"
          :type="tabIdx == 2 && curIdx == index ? '' : 'success'"
          :key="item.id"
          v-text="item.type"
          @click="chooseLuckAttr(item,index,2)"
          effect="dark"
        ></el-tag>
        <el-divider></el-divider>
        <div v-show="availableArr.length">
            <div class="availableArr">
                <span>羁绊效果：</span>
                <div>
                    <div v-if="attr && attr.info && attr.info.introduce" type="text" v-text="attr && attr.info && attr.info.introduce" :underline="false"></div>
                    <div v-for="(item,index) in attr && attr.info && attr.info.config" :key="index" style="margin:10px 0" >
                        <el-badge :value="item.num" class="item">
                            <el-button v-text="item.effect"></el-button>
                        </el-badge>
                    </div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="availableArr">
                <span>天选之人：</span>
                <div>
                   <el-tag
                        v-for="(item) in availableArr"
                        :key="item.id"
                        v-text="item.name"
                        :type="luckMan.id == item.id ? 'luckMan':'success'"
                        @click="chooseLuckMan(item)"
                        effect="dark"
                    ></el-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import heroList from "../json/hero.json";
import jobList from "../json/jobList.json";
import typeList from "../json/typeList.json";
export default {
  name: "chooseLuckMan",
  data() {
    return {
      attr: {},
      tabIdx: undefined,
      curIdx: undefined,
      heroList: [],
      jobList: [],
      typeList: [],
      luckMan: {},
      availableArr: [],
    };
  },
  created() {
    //生命周期 没有dom 但是可以获取到data中的变量
    this.initDate();
    this.jobList = jobList;
    this.typeList = typeList;
    this.heroList = heroList;
    this.heroList.forEach(item=>{
        item.typeInfo = [];
        item.jobInfo = [];
        item.type.forEach(typeID=>{
            this.typeList.forEach(typeListItem=>{
                if(typeListItem.typeID == typeID){
                    item.typeInfo.push(typeListItem)
                }
            })
        })
        item.job.forEach(jobID=>{
            this.jobList.forEach(jobListItem=>{
                if(jobListItem.jobID == jobID){
                    item.jobInfo.push(jobListItem)
                }
            })
        })
    })
  },
  mounted(){
    //   console.log(this.heroList)
  },
  methods: {
    initDate() {
        this.attr={};
        this.tabIdx=undefined;
        this.curIdx=undefined;
        this.luckMan={};
        this.availableArr = [];
    },
    chooseLuckAttr(item, index, num) {
        let bol = false; //bol控制器 如果当前选中的和已存在的 一样时  那么取消选中
        this.tabIdx = num;//记录当前选择的是职业还是特质
        this.curIdx = index;//记录当前选择的是哪一项
        this.availableArr = [];//符合条件的数组  初始化
        this.luckMan = {};//天选之人  初始化
        if(num==1){//当选择职业的时候  jobID
            // this.attr.jobID
            if(this.attr.jobID == item.jobID){
                bol = true
            }
        }else{//当选择特质的时候  typeID
            if(this.attr.typeID == item.typeID){
                bol = true
            }
        }
        if(bol){
            this.initDate();
            return
        }else{
            this.attr = item;
            if(num==1){//当选择职业的时候  jobID
                // 数据处理  把符合条件的数据 推入到新的数组中
                this.heroList.forEach(item=>{
                    item.jobInfo.forEach(jobItem=>{
                        if(jobItem.jobID == this.attr.jobID){
                            this.availableArr.push(item)
                        }
                    })
                })
            }else{//当选择特质的时候  typeID
                this.heroList.forEach(item=>{
                    item.typeInfo.forEach(typeItem=>{
                        if(typeItem.typeID == this.attr.typeID){
                            this.availableArr.push(item)
                        }
                    })
                })
            }
        } 
    },
    chooseLuckMan(obj) {
        if(this.luckMan.id == obj.id){
            this.luckMan = {}
        }else{
            this.luckMan = obj;
        }
    },
  },
};
</script>

<style scoped>
.el-tag {
  margin: 0 10px;
  cursor: pointer;
}
.diy_box {
  display: flex;
  justify-content: start;
  margin: 10px 0;
}
.luckMan {
  background: #fff;
  color: #f56c6c;
  border: 1px solid #f56c6c;
}
.availableArr{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}
.availableArr span{
    margin-right: 10px;
}
</style>