<template>
    <div>
        <div>
            <el-button type="primary" class="floatR" @click="openDialog()" >添加<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        <el-table border @selection-change="handleSelectionChange" ref="multipleTable" :data="tableData.data"  tooltip-effect="dark">
            <el-table-column type="selection"  width="55"  ></el-table-column>
            <el-table-column label='名称' prop='name' ></el-table-column>
            <el-table-column label='图标' >
                <template slot-scope="scope">
                    <img :src="scope.row.img" alt="">
                </template>
            </el-table-column>
            <el-table-column label='属性' prop='attr' ></el-table-column>
            <el-table-column label='合成方式' >
                <template slot-scope="scope">
                    <div v-if="scope.row.made">随机掉落</div>
                    <div v-else>
                            
                    </div>
                </template>
            </el-table-column>
            <el-table-column label='操作' >
                <template slot-scope="scope">
                    <el-button type="primary" @click="openDialog(scope.row)" >修改<i class="el-icon-upload el-icon--right"></i></el-button>
                </template>
            </el-table-column>
        </el-table>
        <add-equipment :config="config" ></add-equipment>
    </div>
</template>
<script>
import addEquipment from './addEquipment.vue'
import {get,post} from '@/actions/axios.js'
export default {
    components:{
        addEquipment
    },
    data(){
        return{
            config:{
                onOK:this.loadData,
                onCancel:this.onCancel,
                form:{},
                dialogFormVisible:false
            },
            multipleSelection:[],
            tableData:{
                data:[],
                current:1,
                pageSize:10,
                total:undefined,
            },
        }
    },
    methods:{
        loadData(skip=this.tableData.current){
            this.config.dialogFormVisible = false
            get('/lol/equipmentList',{skip,limit:this.tableData.pageSize},res=>{
                this.tableData.data = res.data
            })
        },
        openDialog(query){
            if (query) {
                this.config.form = JSON.parse(JSON.stringify(query))
            }
            this.config.dialogFormVisible = true
        },
        handleSelectionChange(val){
            this.multipleSelection = val;
        }
    },
    mounted(){
        this.loadData()
    }
}
</script>
