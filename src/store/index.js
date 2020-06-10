import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import home from './home'
import admin from './admin'
export default new vuex.Store({
    modules: {
        home,admin
    }
})