import ServiceRequest from '../index';
import { IAccount, IDataType, ILoginResult } from './types';
enum LoginAPI {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return ServiceRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}
