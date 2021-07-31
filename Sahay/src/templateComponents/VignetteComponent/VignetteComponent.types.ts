import {ImageSourcePropType} from 'react-native';

export interface IVignetteContent {
  title: string;
  image: ImageSourcePropType;
  descriptionText: string;
  question: string;
  progress: number;
  options: Array<Options>;
  showSkip?: boolean;
  prev?: string;
  next?: string;
}

export interface IComponentState {
  currentQuestion: string;
}

export enum Options {
  NOT_AT_ALL_SIMILAR = 'not at all similar',
  SLIGHTLY_SIMILAR = 'slightly similar',
  SOMEWHAT_SIMILAR = 'somewhat similar',
  VERY_SIMILAR = 'very similar',
}
export const responseNumberMap = new Map<string, number>([
  [Options.NOT_AT_ALL_SIMILAR, 1],
  [Options.SLIGHTLY_SIMILAR, 2],
  [Options.SOMEWHAT_SIMILAR, 3],
  [Options.VERY_SIMILAR, 4],
]);

export interface IVignetteQuestionArray {
  [key: string]: IVignetteContent;
}

export enum QuestionPointers {
  quid1 = 'quid1',
  quid2 = 'quid2',
  quid3 = 'quid3',
  quid4 = 'quid4',
  quid5 = 'quid5',
}

export interface IVignetteProps {
  questionPointer: string;
  vignetteScreenData: IVignetteQuestionArray;
  gotoHome: boolean;
}
