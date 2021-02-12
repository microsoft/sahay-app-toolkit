import {Colors} from './Colors';

export enum ThemeTypes {
  ORANGE_THEME = 'ORANGE_THEME',
  BLUE_THEME = 'BLUE_THEME',
  MAGENTA_THEME = 'MAGENTA_THEME',
}

export interface ITheme {
  MAIN_COLOR: Colors;
}

export type IThemes<ThemeTypes extends string> = {
  [key in ThemeTypes]: ITheme;
};

export const Themes: IThemes<ThemeTypes> = {
  [ThemeTypes.ORANGE_THEME]: {
    MAIN_COLOR: Colors.SUNSHADE,
  },
  [ThemeTypes.BLUE_THEME]: {
    MAIN_COLOR: Colors.SUMMER_SKY,
  },

  [ThemeTypes.MAGENTA_THEME]: {
    MAIN_COLOR: Colors.PINK_CRISIS,
  },
};
