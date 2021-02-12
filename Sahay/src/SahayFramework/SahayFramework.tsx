import React from 'react';
import {ReactElement} from 'react';
import {View} from 'react-native';
import {PolarQuestionComponent} from '../templateComponents/PolarQuestionComponent';
import {IPolarQuestionArray} from '../templateComponents/PolarQuestionComponent/PolarQuestionComponent.types';
import {TextImageComponent} from '../templateComponents/TextImageComponent/TextImageComponent';
import {ITextImageDataArray} from '../templateComponents/TextImageComponent/TextImageComponent.types';
import {ComponentType, ISahayFrameworkProps} from './SahayFramework.types';

export const SahayFramework = ({
  content,
  componentType,
  themeColor,
}: ISahayFrameworkProps): ReactElement => {
  switch (componentType) {
    case ComponentType.TEXT_IMAGE_COMPONENT: {
      return (
        <TextImageComponent
          data={content as ITextImageDataArray}
          themeColor={themeColor}
        />
      );
    }
    case ComponentType.POLAR_QUESTION_COMPONENT: {
      return (
        <PolarQuestionComponent
          data={content as IPolarQuestionArray}
          themeColor={themeColor}
        />
      );
    }

    default: {
      return <View></View>; // DEFAULT case would be changed later
    }
  }
};
