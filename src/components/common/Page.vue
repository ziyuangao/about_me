<template>
    <nav>
        <div class="grid-content">
            <div class="pagination">
                <el-pagination class="marginTop10"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currPage"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>
          </div>
    </nav>
</template>
<script>
  export default {
    props: ['total', 'pageSize', 'currPage'],//接受分页配置数据    total：总条数  currPage：当前页  pageSize：每页显示条数
    data() {
        return {
        }
    },
    methods: {
      handleSizeChange(limit) { //每页显示条数事件
        this.$emit('changeLimit', limit)  //将当前页传给主组件
      },
      handleCurrentChange(page) { //当前页事件
        this.$emit('changeSkip', page)  //将当前页传给主组件
      },
    }
  }
</script>