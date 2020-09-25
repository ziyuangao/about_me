<template>
    <div class="equipment">
        <div class="flex_box">
            <div v-for="(item,index) in equipmentList" :key="index" class="equipmentItem" >
                <div v-text="item.name" style="margin-bottom:10px"></div>
                <el-input-number v-model="item.num" @change="(e)=>handleChange(e,index)" :min="0" :max="10"></el-input-number>
            </div>
        </div>
        <div class="accordion" >
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
// import equipmentList from '../json/equipment.json'
export default {
    data(){
        return {
            num:0,
            activeName:1,
            equipmentList:[],
        }
    },
    created(){
        // this.equipmentList = equipmentList.map(item=>{
        //     item.num = 0;
        //     return item
        // })
    },
    methods:{
        handleChange(e,index){
            // 触发X函数,该函数会提醒用户选择什么样的C合适 并且提示装备合成方式
            this.equipmentList[index].num = e;
        }
    }
}
</script>

<style scoped>
.flex_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
}
.equipmentItem{
    flex: 1;
    text-align: center;
}
.accordion{
    margin-top: 10px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 8px;
}
</style>