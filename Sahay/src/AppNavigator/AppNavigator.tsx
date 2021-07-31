import React from 'react';
import {ReactElement} from 'react';
import {ActionConst, Router, Scene, Stack} from 'react-native-router-flux';
import {SahayFramework} from '../SahayFramework';
import {NavigationScenes} from './AppNavigator.types';

export const AppNavigator = (): ReactElement => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true} type={ActionConst.RESET}>
        <Scene
          key={NavigationScenes.SAHAY_TEXT_IMAGE_COMPONENT}
          component={SahayFramework}
          title="Sahay Text Image Component"
        />
        <Scene
          key={NavigationScenes.SAHAY_MULTI_CHOICE_COMPONENT}
          component={SahayFramework}
          title="Sahay Multi Choice Component"
        />
        <Scene
          key={NavigationScenes.SAHAY_POLAR_QUESTION_COMPONENT}
          component={SahayFramework}
          title="Sahay Multi Choice Component"
        />
      </Stack>
    </Router>
  );
};
