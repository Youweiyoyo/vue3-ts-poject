import { createStore } from 'vuex';
import { IRootState } from './types';
import login from './Login/Login';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'zs',
      age: 20
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
});
export default store;
