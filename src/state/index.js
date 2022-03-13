import Vue from 'vue';
import Vuex from 'vuex';
import home from '../pages/Home/store';

Vue.use(Vuex);

export const storeOptions = {
  modules: {
    home,
  },
};

export default new Vuex.Store(storeOptions);
