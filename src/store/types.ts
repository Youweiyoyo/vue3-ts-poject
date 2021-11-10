import { ILoginState } from './Login/types';
import { ISystemState } from '@/store/main/system/type';
import { IDashboardList } from './main/analysis/type';
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
  analysis: IDashboardList;
}

// 交叉类型
export type IStoreType = IRootState & IRootWithModule;
