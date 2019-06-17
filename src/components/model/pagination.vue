<template>
    <div class="diyPagination">
        <el-pagination
            :small='config.small'
            :background="config.background"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="config.currentPage"
            :page-sizes="config.pageSizes"
            :page-size="config.pageSize"
            :pager-count="config.pagerCount"
            :layout="config.layout"
            :popper-class="config.popperClass"
            :prev-text="config.prevText"
            :prev-next="config.nextText"
            :disabled="config.disabled"
            :total="config.total">
        </el-pagination>
        <!-- 这样做的目的是为了保证传入的配置信息都是可以保存的，例如不通页面引用改组件用法用途不同 传入对应参数即可保证 未传入的参数任然存在默认值 -->
    </div>
</template>
<script>

/**
 * paginationConfig={
 *  small:false,是否使用小型分页样式
    background:false,是否为分页按钮添加背景色
    pageSize:10,每页显示条目个数，支持 .sync 修饰符
    total:100,//number总条目数
    pagerCount:7,页码按钮的数量，当总页数超过该值时会折叠 取值 大于等于 5 且小于等于 21 的奇数
    currentPage:1,当前页数，支持 .sync 修饰符
    layout:'total, sizes, prev, pager, next, jumper',total总数 sizes可编辑当页显示数量 prev next 上（下）一页 pager 折叠 jumper直接转跳  组件布局，子组件名用逗号分隔	
    pageSizes:[10, 20, 50, 100],每页显示个数选择器的选项设置
    popperClass:undefined,//string每页显示个数选择器的下拉框类名	
    prevText:undefined,//string替代图标显示的上一页文字
    nextText:undefined,//string
    disabled:false,//boolean是否禁用
 * }
 */

export default {
    name:'pagination',//分页组件
    props:['paginationConfig'],//传入的获取数据,callBack为回调函数 data为数据
    created(){
        this.initData()
    },
    data(){
        return {
            config:{//默认配置
                small:false,
                background:false,
                pageSize:10,
                total:undefined,//number
                pagerCount:7,
                currentPage:1,
                layout:undefined,//string
                pageSizes:[10, 20, 50, 100],
                popperClass:undefined,//string
                prevText:undefined,//string
                nextText:undefined,//string
                disabled:false,//boolean
                callback:null,
            }
        }
    },
    methods:{
        initData(){
            if (this.paginationConfig) {
                for(let k in this.paginationConfig){
                    this.config[k] = this.paginationConfig[k]
                }
            }else{
                this.$message.error('当前分页组件缺少部分参数,请查看组件内注释')
            }
        },
        handleSizeChange(val){
            this.config.pageSize = val
            this.paginationConfig.callback()
        },
        handleCurrentChange(val){
            this.config.currentPage = val
            this.paginationConfig.callback()
        },
    },
}
/**
 * 1.0保证传入参数 和 无参数时
 * 如果用户传的参数不对呢？
 */
</script>
