import {WINDOW_DIMENSIONS} from './Dimensions';

export enum Fonts {
  POPPINS_REGULAR = 'Poppins-Regular',
  MONTSERRAT_REGULAR = 'Montserrat-Regular',
}

const scaleFactor: number = WINDOW_DIMENSIONS.WIDTH / 380;

export const relativeFontSize = (size: number): number => {
  return Math.round(scaleFactor * size);
};

export const lineHeight = (val: number): number => {
  return scaleFactor * val;
};
