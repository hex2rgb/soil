import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        collapse: false
    },
    mutations: {
        collapse(state) {
            state.collapse = !state.collapse;
        }
    },
    actions: {
        commonConf({commit}) {
            commit('getPayway');
            commit('getGoods');
            commit('getOprs');
        }
    }
});
export default store;
