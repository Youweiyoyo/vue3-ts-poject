import { Module } from 'vuex';
import { ISystemState } from './type';
import { IRootState } from '@/store/types';
import { getPageListData } from '@/network/main/system/system';
const systemModel: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 0. 获取页面的 URL
      const pageName = payload.pageName;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
      }
      // 1. 发送请求
      const PageResult = await getPageListData(pageUrl, payload.queryInfo);
      const { list, totalCount } = PageResult.data;
      switch (pageName) {
        case 'users':
          commit('changeUserList', list);
          commit('changeUserCount', totalCount);
          break;
        case 'role':
          commit('changeRoleList', list);
          commit('changeRoleCount', totalCount);
      }
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList;
          case 'role':
            return state.roleList;
        }
      };
    }
  }
};

export default systemModel;
