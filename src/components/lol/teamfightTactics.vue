<template>
  <div class="teamfightTactics">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="云顶之奕S4" name="first">
        <span>职业：</span>
        <el-tag
          v-for="(item, index) in jobList"
          :type="tabIdx == 1 && curIdx == index ? 'danger' : 'success'"
          :key="item.id"
          v-text="item.job"
          @click="chooseLuckAttr(item,index,1)"
          effect="dark"
        ></el-tag>
        <el-divider></el-divider>
        <span>特质：</span>
        <el-tag
          v-for="(item, index) in typeList"
          :type="tabIdx == 2 && curIdx == index ? 'danger' : 'success'"
          :key="item.id"
          v-text="item.type"
          @click="chooseLuckAttr(item,index,2)"
          effect="dark"
        ></el-tag>
        <el-divider></el-divider>
        <div v-show="availableArr.length">
            <span>天选之人：</span>
            <el-tag
                v-for="(item) in availableArr"
                :key="item.id"
                v-text="item.name"
                :type="luckMan.id == item.id ? 'luckMan':'success'"
                @click="chooseLuckMan(item)"
                effect="dark"
            ></el-tag>
        </div>
        <!-- 业务设计  默认不展示任何人物，只有选择了 对应职业和特质之后 才展示 符合职业或特质的 人物 -->
      </el-tab-pane>
      <!-- <el-tab-pane label="S2" name="second">
                <iframe src="https://101.qq.com/tft/index.shtml?ADTAG=cooperation.glzx.tft" frameborder="0" class="teamfightTactics_warp" ></iframe>
            </el-tab-pane> -->
    </el-tabs>
  </div>
</template>
<script>
import heroList from "../json/hero.json";
import jobList from "../json/jobList.json";
import typeList from "../json/typeList.json";
export default {
  name: "teamfightTactics",
  data() {
    return {
      attr: {},
      activeName: "first",
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
  },
  methods: {
    handleClick(e) {
      console.log(e.name);
    },
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
                    item.job.forEach(k=>{
                        if(k.jobID == this.attr.jobID){
                            this.availableArr.push(item)
                        }
                    })
                })
            }else{//当选择特质的时候  typeID
                this.heroList.forEach(item=>{
                    item.type.forEach(k=>{
                        if(k.typeID == this.attr.typeID){
                            this.availableArr.push(item)
                        }
                    })
                })
            }
            console.log(this.availableArr)
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
.teamfightTactics_warp {
  width: 100%;
  height: 838px;
  overflow: hidden;
}
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
</style>