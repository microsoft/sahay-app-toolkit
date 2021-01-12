import {ITheme} from '../../constants/Themes';
import {IBarrierTextIntroData} from '../templateComponents/TextImageComponent/TextImageComponent.types';

export type IContentInterface = IBarrierTextIntroData;

export enum ComponentType {
  TEXT_IMAGE_COMPONENT = 'TEXT_IMAGE_COMPONENT',
  MULTI_CHOICE_COMPONENT = 'MULTI_CHOICE_COMPONENT',
}

export interface ISahayFrameworkProps {
  content: IContentInterface;
  componentType: ComponentType;
  themeColor: ITheme;
}
