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
          title="Privacy"
        />
      </Stack>
    </Router>
  );
};
