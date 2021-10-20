import { Module } from 'vuex';
import { ISystemState } from './type';
import { IRootState } from '@/store/types';
import { getPageListData } from '@/network/main/system/system';
const systemModel: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 发送请求
      const PageResult = await getPageListData(payload.pageUrl, payload.queryInfo);
      const { list, totalCount } = PageResult.data;
      commit('changeUserList', list);
      commit('changeUserCount', totalCount);
    }
  }
};

export default systemModel;
