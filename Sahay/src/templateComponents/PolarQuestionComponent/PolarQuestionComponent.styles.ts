import {StyleSheet} from 'react-native';
import {
  Colors,
  Fonts,
  lineHeight,
  relativeFontSize,
  relativeHeight,
  relativeWidth,
} from '../../../constants';

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(15),
  },
  buttonView: {
    alignItems: 'center',
    borderColor: Colors.SUMMER_SKY,
    borderRadius: relativeWidth(15),
    borderWidth: relativeWidth(400),
    flex: 2 / 9,
    height: relativeHeight(20),
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
  contentContainer: {
    flex: 8 / 9,
    width: '100%',
  },
  imageView: {
    alignSelf: 'center',
    aspectRatio: 1,
    justifyContent: 'center',
    width: '75%',
  },
  mainText: {
    alignSelf: 'center',
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: relativeFontSize(16),
    fontWeight: '500',
    lineHeight: lineHeight(25),
    textAlign: 'center',
  },
  optionsView: {
    alignSelf: 'center',
    flex: 1 / 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
  },
  textView: {
    alignSelf: 'center',
    flexGrow: 1 / 5,
    justifyContent: 'center',
    width: '82.5%',
  },
});

export {styles};
