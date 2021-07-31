import {FC} from 'react';
import {SvgProps} from 'react-native-svg';
import {ITheme} from '../../../constants/Themes';
import {NavigationScenes} from '../../AppNavigator/AppNavigator.types';

export interface IMetaData {
  descriptionTexts: string;
  imageComponent: FC<SvgProps>;
  next?: string;
  goto?: NavigationScenes;
}

export interface ITextImageDataArray {
  [key: string]: IMetaData;
}

export interface ITextIntroCompProps {
  data: ITextImageDataArray;
  themeColor: ITheme;
}
