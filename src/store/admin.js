var user = localStorage.getItem('ms_username');
export default {
    namespaced: true,
    state:{
        login_loading: false, // 登陆按钮
        info: user?eval("("+user+")"):false, // 登陆用户信息
        resetpasswdDialog: false, // 修改密码弹窗
        resetpasswdloading: false, // 修改密码弹窗
        menu: [],
        p_obj: {},
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
