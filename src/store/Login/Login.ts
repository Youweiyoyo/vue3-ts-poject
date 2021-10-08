import { Module } from 'vuex';

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
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行账号密码登录逻辑');
      console.log(payload, 'payload');
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行手机号登录逻辑');
      console.log(payload, 'payload');
    }
  }
};
export default loginModule;
