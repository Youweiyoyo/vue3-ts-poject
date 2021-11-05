type IFormType = 'input' | 'password' | 'select' | 'datepicker';

export interface IFormItem {
  field: string;
  type: IFormType;
  label: string;
  rules?: any[];
  placeholder?: any;
  // 针对 select 选择框
  option?: any[];
  // 针对特殊属性
  otherOptions?: any;
  // 隐藏某个item
  isHidden?: boolean;
}

export interface IForm {
  formItem: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
