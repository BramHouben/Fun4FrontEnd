import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex, axios);

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [createPersistedState()]
});