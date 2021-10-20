import ServiceRequest from '../index';
import { IAccount, ILoginResult } from './types';
import { IDataType } from '../type';
enum LoginAPI {
  AccountLogin = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return ServiceRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
export function requestUserInfo(id: number) {
  return ServiceRequest.get<IDataType>({
    url: LoginAPI.userInfo + id,
    showLoading: false
  });
}
export function requestUserMenusByRoleId(id: number) {
  return ServiceRequest.get<IDataType>({
    url: LoginAPI.userMenus + id + '/menu',
    showLoading: false
  });
}
