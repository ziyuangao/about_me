<template>
    <div class="break_through">
        <el-tabs type="border-card">
            <el-tab-pane label="个人突破">
                <el-collapse v-model="firstActiveName" accordion>
                    <el-collapse-item title="小技巧" name="1">
                        <div>众所周知，多退几次就能降低个突等级了，那么究竟该怎么退呢？</div>
                         <el-divider></el-divider>
                        <div>个突升降级机制：结界刷新时统计最近十五场战斗的胜负情况，若有九胜则升一级，九负则降一级，均没有则不升不降。</div>
                         <el-divider></el-divider>
                        <div>首先你的个突有9个，你把前8个打掉，最后一个开始退，连退9次，再把最后一个打掉，自动刷新，仍然会降级！</div>
                         <el-divider></el-divider>
                        <div>退的那个突破，我一般会选择看起来比较好打的，因为会给他加章，我以后匹配到他会打的很轻松，而且会有更多章</div>
                    </el-collapse-item>
                    <el-collapse-item title="封印双蛇" name="2">
                        <div>用于打慢速肉队或者不知火+肉，尤其是打不知火很好用，般若和兵佣的连环控制，基本去掉了很多干扰因素，当然前提是命中够高，速度也不要太慢</div>
                         <el-divider></el-divider>
                        <div>如果兵佣控到驴就会很舒服了，可以给蛇挡掉射箭，这里推荐般若和兵佣其中一个带火灵，另一个可以选择控制类御魂加大控制力度，像我怂点怕断火的话是配了招财命中，反正火灵必须有</div>
                    </el-collapse-item>
                    <el-collapse-item title="泷夜叉姬体系" name="3">
                        <div>茶几推荐带针女，到茶几回合选择aoe效果下的【不动】，然后就可以开自动了，除了打多鲸，其他队伍也可以用这个打，视情况而定。</div>
                         <el-divider></el-divider>
                        <div>大蛇拉完神乐再拉，一般三轮可以清场，</div>
                         <el-divider></el-divider>
                        <div>茶几无视御魂的机制比起双蛇好很多，输出可能稍逊色一点点，但是根本不怕返魂香这些。</div>
                         <el-divider></el-divider>
                        <div>一速拉条最好是250+速度，防止化鲸超车，反正能快就快翻车点吗。有的，欧洲龙+欧洲驴连续搞事，茶几自身可以挡一次控制，实在脸不好连续触发那没办法.</div>
                    </el-collapse-item>
                    <el-collapse-item title="离岳鲸鲸体系" name="4">
                        <div>这个阵容除了打一速双拉或者强攻阵容不适合，其他所有阵容基本通吃吧，优点巨稳定，缺点比较慢</div>
                        <el-divider></el-divider>
                        <div>开场1速拉条拉大岳丸ban掉对面干扰性比较强的式神，（兵佣 日和 驴 这些）然后就等鲸鱼慢慢吃掉对面，中间大岳丸随缘协战，无视封印，肉队也扛不住的</div>
                        <el-divider></el-divider>
                        <div>阵容变种 离岳鲸切 其中一只鲸换成鬼切，面对没有小白的肉队可以上场，加快收割速度，建议超星，神乐再拉一次继续砍，看血线普攻就行</div>
                    </el-collapse-item>
                    <el-collapse-item title="双拉蟹林熏" name="5">
                        <div>在我心中目前当前版本中最完美的阵容是面灵气久次良薰晴明茨林蟹姬，但是因为我要带狗粮所以我绝大部分结界用的是面灵气山兔晴明红叶打火机茨林</div>
                         <el-divider></el-divider>
                        <div>寮突可以预览阵容，跳过不知火交给寮友打，个突57级58级的基本没有不知火</div>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="寮突破">
                <el-collapse v-model="secondActiveName" accordion>
                    <el-collapse-item title="基础知识" name="1">
                        <div>寮突破的规则，大概是根据斗技排名匹配的，基本上是斗技排名前后共20家，但是不一定是前10个和后10个，具体怎么匹配的我也不知道</div>
                            <el-divider></el-divider>
                        <div>但是，无论是怎么匹配的，只要你寮里舍得送，那就天天都能打1000章以上的！</div>
                            <el-divider></el-divider>
                        <div>首先，寮突的章跟个突是通的(大概)，同样是退2个人就可以加1章，每周一重置(不是重置到0，但是具体怎么重置我也不清楚，反正周一都会少一点，</div>
                            <el-divider></el-divider>
                        <div>这样来说，你匹配一个170个人的寮，你寮里只需要9~10个人，就可以把对面所有人都送到满章，第二天一早起来就可以收获一个满章的寮突！</div>
                            <el-divider></el-divider>
                        <div>送寮突之前，首先要确定这个寮跟你们斗技水平相当，两个寮的排名幅度不会大梯度变化，否则刚送2天就又匹配不到对方了</div>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="道馆">
                <el-collapse v-model="thirdActiveName" accordion>
                    <el-collapse-item title="发六套道馆两分钟速杀离久吞匣孟婆阵容！(你要的阵容都有)" name="1">
                        <a target="_blank" href="https://bbs.nga.cn/read.php?tid=20266678">https://bbs.nga.cn/read.php?tid=20266678</a>
                    </el-collapse-item>
                     <el-divider></el-divider>
                    <el-collapse-item title="泷夜叉姬”疾风流打法！无视御魂！克制多鲸体系" name="2">
                        <a target="_blank" href="https://bbs.nga.cn/read.php?tid=18607989">https://bbs.nga.cn/read.php?tid=18607989</a>
                    </el-collapse-item>
                     <el-divider></el-divider>
                    <el-collapse-item title="道馆四化鲸不知火2分钟内稳定解法，不怕木魅蚌精返魂香" name="3">
                        <a target="_blank" href="https://bbs.nga.cn/read.php?tid=17220889">https://bbs.nga.cn/read.php?tid=17220889</a>
                    </el-collapse-item>
                     <el-divider></el-divider>
                    <el-collapse-item title="“蛇岳切鲸离”一套通用流打法！稳定暴力快速！" name="4">
                        <a target="_blank" href="https://bbs.nga.cn/read.php?tid=18244380">https://bbs.nga.cn/read.php?tid=18244380</a>
                    </el-collapse-item>
                     <el-divider></el-divider>

                </el-collapse>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name:'break_through',
    data(){
        return {
            firstActiveName:'1',
            secondActiveName:'1',
            thirdActiveName:'1',
        }
    }
}
</script>
<style scoped>
.break_through /deep/ .el-collapse-item__header{
    font-weight: bold;
    font-size: 18px;
}
</style>