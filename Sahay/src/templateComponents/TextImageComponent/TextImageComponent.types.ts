import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {ITheme} from '../../../constants/Themes';
import {NavigationScenes} from '../../AppNavigator/AppNavigator.types';

export interface IBarrierLevel {
  descriptionTexts: string;
  imageComponent: FC<SvgProps>;
  next?: string;
  goto?: NavigationScenes;
}

export interface IBarrierTextIntroData {
  [key: string]: IBarrierLevel;
}

export interface ITextIntroCompProps {
  data: IBarrierTextIntroData;
  themeColor: ITheme;
}
