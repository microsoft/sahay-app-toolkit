import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export enum WINDOW_DIMENSIONS {
  WIDTH = windowWidth,
  HEIGHT = windowHeight,
}

export const relativeWidth = (width: number): number => {
  return Math.round(WINDOW_DIMENSIONS.WIDTH / width);
};
export const relativeHeight = (height: number): number => {
  return Math.round(WINDOW_DIMENSIONS.HEIGHT / height);
};
