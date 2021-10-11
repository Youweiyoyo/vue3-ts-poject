import { Module } from 'vuex';
import router from '@/router';
import {
  accountLoginRequest,
  requestUserInfo,
  requestUserMenusByRoleId
} from '@/network/Login/login';
import LocalCache from '@/utils/cache';
import { IAccount } from '@/network/Login/types';
import { ILoginState } from './types';
import { IRootState } from '../types';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    }
  },
  getters: {},
  actions: {
    // 账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      const LoginRequest = await accountLoginRequest(payload);
      const { id, token } = LoginRequest.data;
      commit('changeToken', token);
      LocalCache.setCache('token', token);
      const userInfoResult = await requestUserInfo(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      LocalCache.setCache('userInfo', userInfo);
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      commit('changeUserMenus', userMenus);
      LocalCache.setCache('userMenus', userMenus);
      await router.push('/main');
    },
    // 手机号登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行手机号登录逻辑');
      console.log(payload, 'payload');
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = LocalCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = LocalCache.getCache('userMenus');
      if (userMenus) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};
export default loginModule;
