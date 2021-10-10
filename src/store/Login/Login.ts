import { Module } from 'vuex';

import { accountLoginRequest } from '@/network/Login/login';
import { IAccount } from '@/network/Login/types';
import { ILoginState } from './types';
import { IRootState } from '../types';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    }
  },
  getters: {},
  actions: {
    // 账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      const LoginRequest = await accountLoginRequest(payload);
      console.log(LoginRequest, '111');
      const { id, toke } = LoginRequest.data;
      commit('changeToken', toke);
    },
    // 手机号登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行手机号登录逻辑');
      console.log(payload, 'payload');
    }
  }
};
export default loginModule;
