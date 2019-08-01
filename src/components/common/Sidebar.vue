<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs" >
                    <el-submenu :index="item.index" :key="item.index" >
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else >
                    <el-menu-item :index="item.index" :key="item.index" >
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      arr:[],
      isShow:false,
      collapse: false,
      items: [
        {
          index: "/lol",
          icon: "el-icon-user",
          title: "用户管理",
          subs:[
            {
              path:"/cloudTopGame",
              title: "云顶之弈",
            },
            {
              path:"/polarBrawl",
              title: "大乱斗",
            },
            {
              path:"/summonerCanyon",
              title: "召唤师峡谷",
            },
            {
              path:"/heroStory",
              title: "英雄故事",
            },
            {
              path:"/beautifulCover",
              title: "精美封面",
            },
          ]
        },
        {
          index: "/postList",
          icon: "el-icon-document",
          title: "帖子管理",
          power:"2",
        },
        {
          index: "003",
          icon: "el-icon-sunrise-1",
          title: "举报管理",
          power:"3",
          subs:[
            {
              index: "/report",
              title: "举报列表",
            },
            {
              index: "/reportType",
              title: "举报类型",
            },
          ]
        },
        {
          index: "/msgList",
          icon: "el-icon-message",
          title: "消息管理",
          power:"4",
        },
        {
          index: "/sensitiveWords",
          icon: "el-icon-chat-dot-round",
          title: "敏感词管理",
          power:"5",
        },
        {
          index: "/orders",
          icon: "el-icon-tickets",
          title: "订单管理",
          power:"6",
        },
        {
          index: "/statistics",
          icon: "el-icon-edit-outline",
          title: "统计管理",
          power:"7",
        },
        {
          index: "/bannerList",
          icon: "el-icon-money",
          title: "Banner管理",
          power:"8",
        },
        {
          index: "/agreement",
          icon: "el-icon-reading",
          title: "服务协议",
          power:"9",
        },
        {
          index: "/suggestions",
          icon: "el-icon-coffee-cup",
          title: "意见反馈",
          power:"10",
        },
        {
          index: "009",
          icon: "el-icon-setting",
          title: "权限管理",
          power:"11",
          subs:[
            {
              index:'userType',
              title: "角色类型",
            },
            {
              index:'power',
              title: "角色管理",
            },
          ]
        },
        {
          index: "/log",
          icon: "el-icon-date",
          title: "日志管理",
          power:"12",
        },
        {
          index: "/recognitionList",
          icon: "el-icon-paperclip",
          title: "识别数据管理",
          power:"1",
        },
        {
          index: "/consumption",
          icon: "el-icon-coin",
          title: "消费设置",
          power:"13",
        },
      ]
    };
  },
  computed: {
    onRoutes(e) {
      return this.$route.path.replace("/", "");
    },
  },
  mounted(){
  },
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar {
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .sidebar > ul {
    height: 100%;
  }
</style>
