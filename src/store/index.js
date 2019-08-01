import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import home from './home'
export default new vuex.Store({
    modules: {
        home,
    }
})