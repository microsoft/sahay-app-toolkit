import {NavigationScenes} from './src/AppNavigator/AppNavigator.types';
import { ISahayFrameworkProps } from './src/SahayFramework/SahayFramework.types';

export interface IFlatListCompData {
  componentName: string;
  goto: NavigationScenes;
  gotoProps : ISahayFrameworkProps
}
