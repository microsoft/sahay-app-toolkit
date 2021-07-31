import {ImageSourcePropType} from 'react-native';
import {ITheme} from '../../../constants/Themes';

export interface INumberListType {
  key: string;
  num: number;
}

export interface IComponentData {
  themeColor: ITheme;
  headerImage: ImageSourcePropType;
  headerTitle: string;
  listData: Array<INumberListType>;
}

export interface INumberListProps {
  dataSource: IComponentData;
  nextGoto: Function;
}
