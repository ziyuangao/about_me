<template>
  <div class="wapper">
    <el-row :gutter="20" class="center">
      <el-col :span="3">
        <el-input
          v-model="tableData.uid"
          placeholder="用户ID"
          size="small"
          clearable
          @blur="loadData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="tableData.mobile"
          placeholder="手机号"
          size="small"
          clearable
          @blur="loadData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="tableData.nickname"
          placeholder="昵称"
          size="small"
          clearable
          @blur="loadData"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-select
          v-model="tableData.isStart"
          placeholder="是否启用"
          size="small"
          clearable
          @change="loadData"
        >
          <el-option label="全部" value></el-option>
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="7">
        <el-date-picker
          @change="loadData"
          v-model="time"
          class="datePicker"
          size="small"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-select
          v-model="tableData.sex"
          placeholder="选择性别"
          size="small"
          clearable
          @change="loadData"
        >
          <el-option label="全部" value></el-option>
          <el-option label="男" value="1"></el-option>
          <el-option label="女" value="2"></el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <el-button
          size="small"
          :disabled="multipleSelection.length == 0"
          type="primary"
          @click="exportExcel"
        >导出</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData.data"
      tooltip-effect="dark"
      border
      v-loading="loading"
      class="marginTop10"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" fixed></el-table-column>
      <el-table-column label="用户昵称" prop="nickname" fixed></el-table-column>
      <el-table-column label="用户头像" width="120">
        <template slot-scope="scope">
          <img v-if="scope.row.portrait" :src="scope.row.portrait" class="avatar" alt />
          <img v-else src="./empty.png" class="avatar" alt />
        </template>
      </el-table-column>
      <el-table-column label="手机号" prop="mobile" show-overflow-tooltip></el-table-column>
      <el-table-column label="性别" prop="sex">
        <template slot-scope="scope">{{ {'1':'男','2':'女'}[scope.row.sex] }}</template>
      </el-table-column>
      <el-table-column label="简介" prop="intro" show-overflow-tooltip></el-table-column>
      <el-table-column label="粉丝" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('fansList',scope.row)" type="text">{{scope.row.fansSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="关注" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('concernList',scope.row)" type="text">{{scope.row.interestSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="好友" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('friendList',scope.row)" type="text">{{scope.row.friendSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="发帖" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('usersPostList',scope.row)" type="text">{{scope.row.postBarSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="总消费" width="80">
        <template slot-scope="scope">
          <el-button
            @click="goTo('consumptionList',scope.row)"
            type="text"
          >{{ '￥' + scope.row.moneySum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="最后一次登录时间" show-overflow-tooltip>
        <template slot-scope="scope">{{ new Date(scope.row.logintime).toLocaleString() }}</template>
      </el-table-column>
      <el-table-column label="拉黑" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('blackList',scope.row)" type="text">{{scope.row.BlacklistSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="收藏" width="60">
        <template slot-scope="scope">
          <el-button @click="goTo('favorite',scope.row)" type="text">{{scope.row.collectSum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="信息数" width="80">
        <template slot-scope="scope">
          <el-button
            @click="goTo('recognitionList',scope.row)"
            type="text"
          >{{scope.row.dataEntrySum}}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" min-width="140px">
        <template slot-scope="scope">
          <el-button
            size="small"
            @click="changeStatus(scope.row)"
            type="text"
            :disabled="scope.row.isStart == 2"
          >禁用</el-button>
          <el-button
            size="small"
            @click="changeStatus(scope.row)"
            type="text"
            :disabled="scope.row.isStart == 1"
          >启用</el-button>
          <el-button size="small" @click="deleteItem(scope.row)" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="tableData.total>=10"
      class="marginTop10"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="tableData.skip"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="tableData.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
    ></el-pagination>
  </div>
</template>
<script>
import { post, get } from "@/actions/axios";
export default {
  data() {
    return {
      loading: false,
      time: [],
      multipleSelection: [],
      tableData: {
        total: undefined,
        current: 1,
        pageSize: 10,
        data: [],
        uid: undefined,
        mobile: undefined,
        nickname: undefined,
        isStart: undefined,
        startTIme: undefined,
        endTime: undefined,
        sex: undefined
      }
    };
  },
  methods: {
    handleSizeChange(val) {
      //pageSize 改变时会触发
      this.tableData.pageSize = val;
      this.loadData();
    },
    handleCurrentChange(val) {
      //currentPage 改变时会触发
      this.tableData.current = val;
      this.loadData();
    },
    goTo(where, obj = {}) {
      //转跳路由
      this.$router.push({
        path: where,
        query: obj
      });
    },
    changeStatus(obj) {
      //修改状态
      if (obj.isStart == 1) {
        obj.isStart = 2;
        console.log("禁用");
      } else {
        console.log("启用");
        obj.isStart = 1;
      }
      // post('')
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteItem(obj) {
      //删除
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let ids = [];
          if (obj) {
            ids = [obj.id];
          } else {
            ids = this.multipleSelection.map(item => {
              return item.id;
            });
          }
          //请求数据
          // post('',ids,res=>{
          //     if (res.success) {
          //         this.loadData()
          //     }
          // })
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    loadData() {
      //加载数据
      this.loading = true;
      let obj = { ...this.tableData };
      delete obj.data;
      if (this.time) {
        obj.startTime = this.time[0];
        obj.endtTime = this.time[1];
      } else {
        obj.startTime = undefined;
        obj.endtTime = undefined;
      }
      //请求 结束后 loading = false
      post("/api/users/getAppUser", obj, res => {
        res.data.forEach(item => {
          item.intro = item.intro.substring(30, 0);
        });
        this.tableData.data = res.data;
        this.tableData.total = res.total;
        this.loading = false;
      });
    },
    exportExcel() {
      //导出
      let ids = this.multipleSelection.map(item => {
        return item.id;
      });
      let url = "";
      ids.forEach((item, index) => {
        url += "ids[" + index + "]=" + item + "&";
      });
      url = url.substring(0, url.length - 1);
      let aDom = document.createElement("a");
      aDom.setAttribute("downLoad", "");
      aDom.href = apiUrl + "/api/users/exportModel?" + url;
      aDom.target = "_blank";
      document.body.append(aDom);
      aDom.click();
      document.body.removeChild(aDom);
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
