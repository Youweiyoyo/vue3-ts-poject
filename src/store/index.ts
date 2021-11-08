import { createStore, Store, useStore as useVuexStore } from 'vuex';
import { IRootState, IStoreType } from './types';
import login from './Login/Login';
import system from './main/system/system';
import analysis from './main/analysis/dashboard';
import { getPageListData } from '@/network/main/system/system';
const store = createStore<IRootState>({
  state() {
    return {
      name: 'zs',
      age: 20,
      entireDepartment: [],
      entireRoles: [],
      entireMenu: []
    };
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list;
    },
    changeEntireRoles(state, list) {
      state.entireRoles = list;
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 100 });
      const { list: departmentList } = departmentResult.data;
      const rolesResult = await getPageListData('/role/list', { offset: 0, size: 100 });
      const { list: roleList } = rolesResult.data;
      const menuResult = await getPageListData('/menu/list', { offset: 0, size: 100 });
      const { list: menuList } = menuResult.data;
      commit('changeEntireDepartment', departmentList);
      commit('changeEntireRoles', roleList);
      commit('changeEntireMenu', menuList);
    }
  },
  modules: {
    login,
    system,
    analysis
  }
});
export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
export default store;
