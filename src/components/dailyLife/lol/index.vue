<template>
    <div>
        <el-tabs type="border-card" >
            <el-tab-pane label="角色查询"><role></role></el-tab-pane>
            <el-tab-pane label="组合查询"><combination></combination></el-tab-pane>
            <el-tab-pane label="装备查询"><equipment></equipment></el-tab-pane>
            <el-tab-pane label="价格查询"><price></price></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import role from './role.vue'
import combination from './combination.vue'
import equipment from './equipment.vue'
import price from './price.vue'
export default {
    components:{
        role,combination,equipment,price
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
