import {StyleSheet} from 'react-native';
import {
  Colors,
  Fonts,
  relativeFontSize,
  relativeWidth,
  relativeHeight,
  lineHeight,
} from '../../../constants';

const styles = StyleSheet.create({
  markerText: {
    fontSize: relativeFontSize(10),
  },
  markerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -relativeHeight(60),
  },
  optionText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(11.5),
    lineHeight: lineHeight(17),
    textAlign: 'center',
  },
  optionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sliderContainer: {
    alignSelf: 'center',
    width: relativeWidth(1.55),
  },
  track: {
    borderRadius: relativeWidth(5),
    height: relativeHeight(150),
    opacity: 0.6,
  },
  thumb: {
    width: relativeWidth(19),
    height: relativeHeight(32),
    borderColor: Colors.SUNSHADE,
  },
});

export {styles};
