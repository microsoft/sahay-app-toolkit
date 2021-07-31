import {ElementType} from 'react';
import {Colors} from '../../../constants';
import {NavigationScenes} from '../../AppNavigator/AppNavigator.types';

export interface IContent {
  title?: string;
  CardStatus?: string;
  description?: string;
  progress?: number;
  image?: ElementType;
  video?: ElementType;
  choice: Array<IChoices>;
  multiChoice: boolean;
  goto?: NavigationScenes;
  gotoProps?: IGotoProps<IScreenDataType>;
}

export interface IScreenDataType {
  [key: string]: IContent;
}

export interface IChoices {
  choiceId: number;
  label: string;
  showFreeText?: boolean;
  next: string;
  choiceGoto?: NavigationScenes;
}

export interface IButtonState {
  choiceId: number;
  checkBoxChosen: boolean;
}

export interface IComponentState {
  currentQuestion: string;
  nextQuestionPointer: string;
  nextGotoComponent?: NavigationScenes;
  nextGotoProps?: IGotoProps<IScreenDataType>;
}

export type IGotoProps<T> = {
  [key: string]: T;
};

export interface ISingleChoiceCompProps {
  screenData: IScreenDataType;
  themeColor: Colors;
  linearGradientTheme: Array<string>; // example = ['rgba(255, 194, 74, 0.43)', 'rgba(255, 119, 21, 0.43)']
}
