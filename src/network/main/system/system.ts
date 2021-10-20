import Service from '../../index';
import { IDataType } from '../../type';
export function getPageListData(url: string, queryInfo: any) {
  return Service.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
