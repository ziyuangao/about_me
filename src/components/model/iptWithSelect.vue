<template>
    <div>
        <el-input  class="input-with-select" :size="config.size" :type="config.type"  :maxlength='config.maxlength' :minlength='config.minlength' 
        :placeholder='config.placeholder' clearable :disabled='config.disabled' :prefix-icon='config.prefixIcon' :suffix-icon='config.suffixIcon'
        :rows='config.rows' :autosize="config.autosize" >
            <el-select slot="prepend">
                <el-option>1</el-option>
                <el-option>2</el-option>
               
            </el-select>
        </el-input>
    </div>
</template>
<script>
export default {
    name:'iptWithSelect'
}
</script>
<style scoped>
   .el-input .el-select{
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
