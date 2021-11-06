import { ILoginState } from './Login/types';
import { ISystemState } from '@/store/main/system/type';
export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRoles: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
}

// 交叉类型
export type IStoreType = IRootState & IRootWithModule;
