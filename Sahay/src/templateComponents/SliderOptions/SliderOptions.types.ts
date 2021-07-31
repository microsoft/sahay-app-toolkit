import {ITheme} from '../../../constants/Themes';

export interface ISliderProps {
  data: Array<string>;
  selectedOption: number;
  setSelectedOption: Function;
  theme: ITheme;
}
