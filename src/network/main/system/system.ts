import Service from '../../index';
import { IDataType } from '../../type';
export function getPageListData(url: string, queryInfo: any) {
  return Service.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
export function DeletePageData(url: string) {
  return Service.delete<IDataType>({
    url: url
  });
}
export function createPageData(url: string, newData: any) {
  return Service.post<IDataType>({
    url: url,
    data: newData
  });
}
export function editPageData(url: string, editData: any) {
  return Service.patch<IDataType>({
    url: url,
    data: editData
  });
}
