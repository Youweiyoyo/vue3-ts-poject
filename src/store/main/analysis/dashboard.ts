import { Module } from 'vuex';
import { IDashboardList } from './type';
import { IRootState } from '@/store/types';
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/network/main/analysis/dashboard';
const dashboardModel: Module<IDashboardList, IRootState> = {
  namespaced: true,
  state() {
    return {
      dataList1: [],
      dataList2: [],
      dataList3: [],
      dataList4: []
    };
  },
  mutations: {
    changeDataList1(state, payload) {
      state.dataList1 = payload;
    },
    changeDataList2(state, payload) {
      state.dataList2 = payload;
    },
    changeDataList3(state, payload) {
      state.dataList3 = payload;
    },
    changeDataList4(state, payload) {
      state.dataList4 = payload;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }, payload) {
      const { data: dataList1Result } = await getCategoryGoodsCount();
      commit('changeDataList1', dataList1Result);
      const { data: dataList2Result } = await getCategoryGoodsSale();
      commit('changeDataList2', dataList2Result);
      const { data: dataList3Result } = await getCategoryGoodsFavor();
      commit('changeDataList3', dataList3Result);
      const { data: dataList4Result } = await getAddressGoodsSale();
      commit('changeDataList4', dataList4Result);
    }
  }
};
export default dashboardModel;
