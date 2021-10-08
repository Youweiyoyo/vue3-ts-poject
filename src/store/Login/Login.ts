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
    accountLoginAction({ commit }, paylod: any) {
      console.log('执行action');
      console.log(paylod, 'payload');
    }
  }
};
export default loginModule;
