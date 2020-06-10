<template>
  <div class="yys">
    <el-tabs type="border-card">
      <el-tab-pane label="体力">
        <el-collapse v-model="strengthActiveName" accordion>
            <el-collapse-item title="寄样" name="1">
                <div>斗鱼是一张可以获取体力的结界卡，如果你每天都打逢魔boss的话，那么高星结界卡是不容易断的，5~6X的斗鱼的收益在12~18不等，按照16来算(太低建议洗掉)，每次寄养可以获得16*8.4=134.4=134体力，一天3次可以获得402体力</div>
            </el-collapse-item>
            <el-collapse-item title="结界卡" name="2">
                <div>按照前面所说，5~6X的斗鱼的收益在12~18不等，自己的抠一点好了，按照15的收益来算，一天可以获得15*24=360体力</div>
            </el-collapse-item>
            <el-collapse-item title="地图获取" name="3">
                <div>在阴阳寮地图选项中，可以获取20体力，早上起来一次，中午摸鱼一次，晚上回家一次，至少获得3*20=60体力</div>
            </el-collapse-item>
            <el-collapse-item title="结界突破" name="4">
                <div>结界突破这个玩法中，有较大概率可以获得体力，概率应该是大于1/2的，就按1/2算，每次按最少的3体力来算，一天打30个个突，1/2*30*3=45体力，如果你一周做不到平均每天打30个个突，那你会损失很多很多资源</div>
            </el-collapse-item>
            <el-collapse-item title="中午晚上送" name="5">
                <div>中午12点和晚上8点都会送一波体力，一共40</div>
            </el-collapse-item>
            <el-collapse-item title="封魔四次" name="6">
                <div>大约40点</div>
            </el-collapse-item>
            <el-collapse-item title="自然回复" name="7">
               <div>体力每5分钟自动回一点，按照你体力总量一直大于100来算，一天也可以获取24*60/5*0.6=172.8体力</div>
            </el-collapse-item>
            <el-collapse-item title="每日任务" name="8">
                <div>每日任务的80档给20点体力</div>
            </el-collapse-item>
            <el-collapse-item title="其他" name="9">
                <div>签到,体力悬赏,探索小怪/宝箱/逢魔boss小纸人</div>
            </el-collapse-item>
            <el-collapse-item title="总结" name="10">
                <div>综上：刨去大型活动，一天白嫖800体力是不成问题的O(∩_∩)O
                </div>
            </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="勾玉">
        <el-collapse v-model="magatamaActiveName" accordion>
            <el-collapse-item title="永久勾玉卡" name="1">
                <div>永久勾玉卡作为每个人开局必买的产品，每天可以稳定提供20勾玉，一个月左右回本</div>
            </el-collapse-item>
            <el-collapse-item title="地域鬼王" name="2">
                <div>地域鬼王按照每个人每天能打2个来算，那么一天是20*2=40勾玉</div>
            </el-collapse-item>
            <el-collapse-item title="勾协" name="3">
                <div>现在每天每个人至少有4*2个悬赏封印，平均出现1个30勾或者接到一个30勾应该不是很难的事情</div>
            </el-collapse-item>
            <el-collapse-item title="个突" name="4">
                <div>在体力获取篇说道，每天打30个个突是最基本的事情，这就是50勾玉</div>
            </el-collapse-item>
            <el-collapse-item title="斗技" name="5">
                <div>看个人60~300不等</div>
            </el-collapse-item>
            <el-collapse-item title="每日" name="6">
                <div>每日任务做完有20勾</div>
            </el-collapse-item>
            <el-collapse-item title="秘闻" name="7">
               <div>秘闻打完有385勾，平均每天55勾</div>
            </el-collapse-item>
            <el-collapse-item title="分享" name="8">
                <div>秘闻+地鬼分享共40勾，平均每天5.7勾</div>
            </el-collapse-item>
            <el-collapse-item title="其他" name="9">
                <div>签到,石距/年兽给点小羊毛,别人抽卡你点赞的小羊毛,探索小怪/宝箱/逢魔boss小纸人</div>
            </el-collapse-item>
            <el-collapse-item title="总结" name="10">
                <div>每天就算不占太鼓，也能获得20+40+50+30+50+80+20+55+5.7=350.7勾玉,这样算下来一个月大概1w勾玉</div>
            </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="金币">
          <el-collapse v-model="coinsActiveName" accordion>
            <el-collapse-item title="每日" name="1">
                <div>每日一共给8000金币</div>
            </el-collapse-item>
            <el-collapse-item title="结界突破" name="2">
                <div>个突大概每个给500金币，寮突大概每个给1000金币，500*30+1000*12=27000</div>
            </el-collapse-item>
            <el-collapse-item title="寮30" name="3">
                <div>寮30每天也给很多金币，2000*40=8w</div>
            </el-collapse-item>
            <el-collapse-item title="逢魔之时" name="4">
                <div>boss6w，点4次2.5w，小鬼王打满伤害2w</div>
            </el-collapse-item>
            <el-collapse-item title="卖御魂" name="5">
                <div>稍微刷一点，平均每天至少卖50个5X吧，5w</div>
            </el-collapse-item>
            <el-collapse-item title="年兽" name="6">
                <div>年兽开满buff是5w7，2次就是11.4w</div>
            </el-collapse-item>
            <el-collapse-item title="协战50次" name="7">
               <div>协战50次共5w</div>
            </el-collapse-item>
            <el-collapse-item title="其他" name="8">
                <div>签到,石距/年兽给点小羊毛,探索小怪/宝箱/逢魔boss小纸人</div>
            </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="勋章">
        <el-collapse v-model="medalActiveName" accordion>
            <el-collapse-item title="结界突破" name="1">
                <div>结界突破作为勋章获取的主要来源，是最快捷、最轻松的方式<el-button type="text" class="break_through_btn">突破阵容</el-button></div>
                <el-divider></el-divider>
                <div>个突的话，平均每个个突2个牌子，一天打30个，就是60个牌子，加上达摩里的15*3+2，也就是107个牌子</div>
                <el-divider></el-divider>
                <div>寮突打2轮满章，就是8*6*2=96个牌子，这样加起来一天光突破就至少有200个牌子</div>
            </el-collapse-item>
            <el-collapse-item title="每日" name="2">
                <div>每日5章，聊胜于无</div>
            </el-collapse-item>
            <el-collapse-item title="狩猎战" name="3">
                <div>狩猎战平均每天50个吧，退治从来不开不知道有多少</div>
            </el-collapse-item>
            <el-collapse-item title="商店" name="4">
                <div>猫猫商店有时候会9W卖你50个</div>
            </el-collapse-item>
            <el-collapse-item title="总结" name="5">
                <div>勋章的主要来源还是突破，突破券溢出真的是太浪费了，还是希望大家都能积极清突破~</div>
            </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "yys",
  data(){
      return{
          strengthActiveName:'1',
          magatamaActiveName:'1',
          coinsActiveName:'1',
          medalActiveName:'1',

      }
  }
};
</script>
<style scoped>
.xsfycx {
  height: 838px;
  width: 100%;
  overflow: hidden;
}
.break_through_btn{
    font-size: 16px;
}
.yys /deep/ .el-collapse-item__header{
    font-weight: bold;
    font-size: 18px;
}
</style>