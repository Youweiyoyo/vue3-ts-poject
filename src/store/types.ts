import { ILoginState } from './Login/types';
export interface IRootState {
  name: string;
  age: number;
}

export interface IRootWithModule {
  login:ILoginState;
}

// 交叉类型
export type IStoreType = IRootState & IRootWithModule;
