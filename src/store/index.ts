import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState, IStoreType } from './types';
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
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
