import React from 'react';
import {ReactElement} from 'react';
import {View} from 'react-native';
import {TextImageComponent} from '../templateComponents/TextImageComponent/TextImageComponent';
import {ComponentType, ISahayFrameworkProps} from './SahayFramework.types';

export const SahayFramework = ({
  content,
  componentType,
  themeColor
}: ISahayFrameworkProps): ReactElement => {
  switch (componentType) {
    case ComponentType.TEXT_IMAGE_COMPONENT: {
      return <TextImageComponent data={content} themeColor={themeColor} />;
    }
    default: {
      return <View></View>;  // DEFAULT case would be changed later
    }
  }
};
