import { NavigationScenes } from "../AppNavigator/AppNavigator.types";

export interface IUrlMapping {
    [key: string]: NavigationScenes;
  
}
  

export const urlMappingComponent: IUrlMapping = {
    'NavigationScenes.HOME': NavigationScenes.HOME,
  };
  