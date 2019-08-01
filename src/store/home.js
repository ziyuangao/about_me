export default {
    namespaced: true,
    state:{
        query:{},//公用传递数据
        status:{},//状态集合
    },
    mutations:{
      updata (state, payload) {
        for (var key in payload) {
          state[key] = payload[key];
        }
      }
    },
    actions:{
      updata (context,{ payload }) {
        context.commit('updata', payload);
      }
    }
}