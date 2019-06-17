<template>
  <div>
    <el-cascader :options="options" v-model="config.data" @change="config.change" clearable placeholder="请选择地址" :size="config.size"></el-cascader>
  </div>
</template>
<script>
/**
 * 该组件仅供省市区三级使用
 * 传入一个配置对象sortConfig
 * 包含两个Key 一个是data为传入要绑定的model
 * 一个是数据改变时触发的函数
 * sortConfig{
 *    data:model,//绑定的数据
 *    change:fn，//触发的函数
 *    size:尺寸 medium / small / mini
 * }
 */
import citys from "./citys_1.json";
export default {
  data() {
    return {
      options: [],
      config:{
          size:"medium",
          data:undefined,
          change:null,
      }
    };
  },
  methods:{
      initData(){
          if (this.sortConfig) {
              for(let k in this.sortConfig){
                  this.config[k] = this.sortConfig[k]
              }
          }else{
            this.$message.console.error('当前分页组件缺少部分参数,请查看组件内注释');
          }
      }
  },
  created(){
      this.initData()
  },
  props: ["sortConfig"],
  created() {
    this.options = citys;
  },
};
</script>

