import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export interface IPolarQuestionComponentProps {
  text: string;
  image: FC<SvgProps>;
  onPressYes: Function;
  onPressNo: Function;
}
