import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {ITheme} from '../../../constants/Themes';

export interface IPolarQuestionMetaData {
  text: string;
  image: FC<SvgProps>;
  onPressYes: Function;
  onPressNo: Function;
}

export interface IPolarQuestionArray {
  [key: string]: IPolarQuestionMetaData;
}

export interface IPolarQuestionComponentProps {
  data: IPolarQuestionArray;
  themeColor: ITheme;
}
