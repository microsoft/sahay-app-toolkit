import {NavigationScenes} from '../../../AppNavigator/AppNavigator.types';
import {ITextImageDataArray} from '../../../templateComponents/TextImageComponent/TextImageComponent.types';
import {englishSpeakingIntro} from '../assets';

export const exampleTextImgData: ITextImageDataArray = {
  quid1: {
    descriptionTexts:
      'Although effectively speaking in English requires practice, it isn’t an impossible task and can be achieved easily',
    imageComponent: englishSpeakingIntro,
    next: 'quid2',
  },

  quid2: {
    descriptionTexts:
      'Let us embark on a journey where we provide you curated list of resources to help you excel at having great oratory skills in English',
    imageComponent: englishSpeakingIntro,
    goto: NavigationScenes.HOME,
  },
};
