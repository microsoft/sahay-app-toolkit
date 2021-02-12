import {ITheme} from '../../constants/Themes';
import {
  IPolarQuestionArray,
  IPolarQuestionMetaData,
} from '../templateComponents/PolarQuestionComponent/PolarQuestionComponent.types';
import {IBarrierTextIntroData} from '../templateComponents/TextImageComponent/TextImageComponent.types';

export type IContentInterface = IBarrierTextIntroData & IPolarQuestionArray;

export enum ComponentType {
  TEXT_IMAGE_COMPONENT = 'TEXT_IMAGE_COMPONENT',
  MULTI_CHOICE_COMPONENT = 'MULTI_CHOICE_COMPONENT',
  POLAR_QUESTION_COMPONENT = 'POLAR_QUESTION_COMPONENT',
}

export interface ISahayFrameworkProps {
  content: IContentInterface;
  componentType: ComponentType;
  themeColor: ITheme;
}
