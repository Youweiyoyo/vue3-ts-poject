import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState, IStoreType } from './types';
import login from './Login/Login';
import system from './main/system/system';
import { getPageListData } from '@/network/main/system/system';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'zs',
      age: 20,
      entireDepartment: [],
      entireRoles: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRoles(state, list) {
      state.entireRoles = list;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 100 });
      const { list: departmentList } = departmentResult.data;
      const rolesResult = await getPageListData('/role/list', { offset: 0, size: 100 });
      const { list: roleList } = rolesResult.data;
      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRoles', roleList);
    }
  },
  modules: {
    login,
    system
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
