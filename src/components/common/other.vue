<template>
    <div class="other">
        <div class="other_warp">
            <div class="other_warp_menu" ref="menu"></div>
            <div class="other_warp_main">
                <el-button @click="handleClick" >点我左边隐藏/显示</el-button>
                <div class="fater">
                    <div v-for="(item,index) in 20" :key="index" class="fater_item">
                        item
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'other',
    data(){
        return {
            bol:false
        }
    },
    methods:{
        handleClick(){
            if(this.bol){
                this.$refs.menu.style.width="250px";
            }else{
                this.$refs.menu.style.width="100px";
            }
            this.bol = !this.bol
        }
    }
}
</script>
<style scoped>
    .other_warp{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(233, 233, 233, 0.8);
        display: flex;
        justify-content: flex-start;
    }
    .other_warp_menu{
        width: 250px;
        background: red;
    }
    .other_warp_main{
        width: 100%;
        background: rgba(233, 233, 233, 0.8);
    }
    .fater{
        height: 300px;
        width: 300px;
        overflow-y:scroll;
        box-sizing: border-box;
        border: 1px solid black;
        margin: 30px;
        background: rgba(233, 233, 233, 0.8);
    }
    .fater_item{
        box-sizing: border-box;
        height: 30px;
        width: 100%;
        border: 1px solid white;
        background: black;
    }
</style>