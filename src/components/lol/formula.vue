<template>
  <div class="formula">
      <!-- 感谢313224646提供技术支持 -->
    <div class="tip">提示: 请点击一个装备查看合成路线以及信息</div>
    <div class="synthesis">
        <!-- 展示所有装备 -->
      <div v-for="(item,index) in synthesis"  :key="item.id" >
        <img :class="curIdx == index ? 'equipment_img active':'equipment_img' " :src="item.src" @click="synthesisClick(item,index)"  />
      </div>
    </div>
    <!-- 展示合成公式 -->
    <div v-show="selectEquipment.id">
        <img class="equipment_img" :src="selectSynthesis.src" style="margin-right:30px"/><span style="vertical-align: middle;font-size:40px" >=</span>
        <img  class="equipment_img" :src="decomposition[0] && decomposition[0].src" @click="setSelectEquipment(decomposition[0])"/><span style="vertical-align: middle;font-size:40px" >+</span>
        <img  class="equipment_img" :src="decomposition[1] && decomposition[1].src" @click="setSelectEquipment(decomposition[1])"/>
    </div>    
    <div v-show="selectEquipment.id">
        <div class="info-name">{{selectEquipment.name}}</div>
        <div class="info-desc">{{selectEquipment.desc}}</div>
    </div>
  </div>
</template>

<script>
import { getSynthesis } from '../common/equipment.js'
export default {
    data () {
        return {
            curIdx:undefined,
            synthesis: [],
            decomposition: [], // 分解后的装备
            selectSynthesis: {},
            selectEquipment: {} // 用于展示选中装备的信息
        }
    },
    created(){
        this.synthesis = getSynthesis();
    },
    methods: {
        synthesisClick (targer,index) {
            this.curIdx = index;
            this.selectSynthesis = targer
            this.setSelectEquipment(targer)
            this.decomposition = targer.decomposition()
        },
        setSelectEquipment (targer) {
            this.selectEquipment = targer
        }
    },

};
</script>
<style scoped>
.tip {
  margin: 8px 10px;
  font-size: 14px;
}
.active{
    border: 3px solid #1989fa;
}
.synthesis {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
}

.equipment_img{
    width: 60px;
    height: 60px;
    margin:10px;
    vertical-align: middle;
    box-sizing: border-box;
}

.targer {
  padding: 10px;
}

.base,
.synthesis--select {
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
}

.base-item,
.synthesis-item--select {
  width: calc(100% / 1.5);
  height: calc(100% / 1.5);
  padding: 8px;
  font-size: 0;
}

.info {
  color: #ffffff;
  margin: 20px 6px;
}

.info-name {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>