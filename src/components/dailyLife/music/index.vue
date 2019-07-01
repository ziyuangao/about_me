<template>
    <div>
        本地音乐播放器
        <div>
            <el-card shadow="always">
                <el-row>
                    <el-col :span="10" >
                        <!-- 播放器区域 -->
                        <div>
                            <audio controls ref='mp3' >
                                <source src="./lol.mp3" loop type="audio/mpeg">
                                您的浏览器不支持 audio 元素。
                            </audio>
                        </div>
                        <div>
                            <!--  上一首  下一首  收起列表 -->
                            <el-button-group>
                                <el-button  type="primary"  icon='el-icon-back' ></el-button>
                                <el-button  type="primary"  :icon="isShow?'el-icon-upload2':'el-icon-download'" @click="isShow=!isShow"  ></el-button>
                                <el-button  type="primary"  icon='el-icon-right' ></el-button>
                            </el-button-group>
                        </div>
                        <el-upload
                            class="upload-demo"
                            drag
                            action="http://localhost:9999/upload/mp3"
                            :on-success="handleAvatarSuccess"
                            :before-upload='beforeAvatarUpload'
                            multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>
                    </el-col>
                    <el-col :span="14" v-show="isShow">
                        <!-- 列表区域 -->
                        <el-table border  size="small"  highlight-current-row :data="tableData.data"  >
                            <el-table-column  label='歌曲名' prop='originalname' ></el-table-column>
                            <el-table-column  label='歌手名' prop='singer' ></el-table-column>
                            <el-table-column  label='歌曲长度' prop='size' ></el-table-column>
                            <el-table-column  label='播放' width='60'>
                                <template slot-scope='scope'>
                                    <el-button icon='el-icon-video-play'  @click="play(scope.row)" ></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script>
import {post,get} from '@/actions/axios.js'
export default {
    data(){
        return {
            isShow:true,
            tableData:{
                data:[],
                current:1,
                pageSize:10,
                total:undefined,
                searchKey:undefined,
            },
        }
    },
    methods:{
        handleAvatarSuccess(res, file){
            this.tableData.data.push(res)
        },
        beforeAvatarUpload(file){
            const isMP3 = file.type === 'audio/mp3';
            const isLt20M = file.size / 1024 / 1024 < 20;

            if (!isMP3) {
                this.$message.error('上传音乐必须是mp3格式!');
            }
            if (!isLt20M) {
                this.$message.error('上传音乐大小不能超过 20MB!');
            }
            return isMP3 && isLt20M;
        },
        play(obj){
            let mp3 = this.$refs.mp3
            mp3.src = obj.url
            mp3.play()
        }
    },
    mounted(){
    }
}
</script>
