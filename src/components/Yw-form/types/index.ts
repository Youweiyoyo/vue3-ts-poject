type IFormType = 'input' | 'password' | 'select' | 'datepicker';

export interface IFormItem {
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对 select 选择框
  option?: any[];
  // 针对特殊属性
  otherOptions?: any;
}
