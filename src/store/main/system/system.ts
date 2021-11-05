import { Module } from 'vuex';
import { ISystemState } from './type';
import { IRootState } from '@/store/types';
import {
  getPageListData,
  DeletePageData,
  createPageData,
  editPageData
} from '@/network/main/system/system';
const systemModel: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menusList: [],
      menusCount: 0
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
    },
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenusList(state, menusList: any) {
      state.menusList = menusList;
    },
    changeMenuCount(state, MenusCount: number) {
      state.menusCount = MenusCount;
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
        case 'goods':
          pageUrl = '/goods/list';
          break;
        case 'menu':
          pageUrl = '/menu/list';
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
          break;
        case 'goods':
          commit('changeGoodsList', list);
          commit('changeGoodsCount', totalCount);
          break;
        case 'menu':
          commit('changeMenusList', list);
          commit('changeMenuCount', totalCount);
          break;
      }
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await DeletePageData(pageUrl);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async createPageDataAction({ dispatch }, payload) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      await createPageData(pageUrl, newData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async editPageDataAction({ dispatch }, payload) {
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageData(pageUrl, editData);
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
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
          case 'goods':
            return state.goodsList;
          case 'menu':
            return state.menusList;
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userCount;
          case 'role':
            return state.roleCount;
          case 'goods':
            return state.goodsCount;
          case 'menu':
            return state.menusCount;
        }
      };
    }
  }
};

export default systemModel;
