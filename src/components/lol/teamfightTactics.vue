<template>
  <div class="teamfightTactics">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="天选之人=>阵容" name="first">
          <choose-one></choose-one>
          <!-- 展示满羁绊效果，提示优选装备，推荐S,A,B三套阵容 -->
      </el-tab-pane>
      <el-tab-pane label="装备=>阵容" name="second">
          <equipment></equipment>
          <!-- 展示主C人物，推荐搭配天选，推荐S,A,B三套阵容 -->
      </el-tab-pane>
      <el-tab-pane label="装备合成图" name="third">
          <!-- <img src="../../../static/img/formula.jpeg" alt=""> -->
          <formula></formula>
      </el-tab-pane>
      <el-tab-pane label="恰烂分" name="fourth">
        <choudidi></choudidi>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import formula from './formula.vue'
import chooseOne from './chooseLuckMan'
import equipment from './equipment'
import choudidi from './choudidi'
export default {
  name: "teamfightTactics",
  components:{chooseOne,equipment,choudidi,formula},
  data(){
      return {
          activeName: "first",
      }
  },
  methods:{
    handleClick(e) {
        console.log(e.name);
    },
  }
};
</script>
<style scoped>
.teamfightTactics{
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
}
.teamfightTactics_warp {
  width: 100%;
  height: 838px;
  overflow: hidden;
}
</style>