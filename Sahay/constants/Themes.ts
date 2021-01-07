import {Colors} from './Colors';

export enum ThemeTypes {
  SELF_DISCOVERY = 'SELF_DISCOVERY',
  BREAKING_BARRIERS = 'BREAKING_BARRIERS',
  COPING_WITH_CRISIS = 'COPING_WITH_CRISIS',
}

export interface ITheme {
  MAIN_COLOR: Colors;
}

export type IThemes<ThemeTypes extends string> = {
  [key in ThemeTypes]?: ITheme;
};

export const Themes: IThemes<ThemeTypes> = {
  [ThemeTypes.SELF_DISCOVERY]: {
    MAIN_COLOR: Colors.SUNSHADE,
  },
  [ThemeTypes.BREAKING_BARRIERS]: {
    MAIN_COLOR: Colors.SUMMER_SKY,
  },

  [ThemeTypes.COPING_WITH_CRISIS]: {
    MAIN_COLOR: Colors.PINK_CRISIS,
  },
};
