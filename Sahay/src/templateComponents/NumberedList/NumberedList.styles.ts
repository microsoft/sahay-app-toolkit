import {StyleSheet} from 'react-native';
import {
  relativeWidth,
  Colors,
  Fonts,
  lineHeight,
  relativeFontSize,
  relativeHeight,
} from '../../../constants';

const styles = StyleSheet.create({
  bulletStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14,
    fontStyle: 'normal',
    color: Colors.BLACK,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'center',
  },
  circle: {
    width: 22,
    height: 22,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.LIGHT_GREY,
    borderRadius: 22 / 2,
    justifyContent: 'center',
  },
  bulletItemStyle: {
    flex: 1,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  reportCardView: {
    alignSelf: 'center',
    backgroundColor: Colors.WHITE_SMOKE,
    borderRadius: relativeWidth(22),
    flex: 7 / 9,
    width: '90%',
  },
  questionContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.WHITE_SMOKE,
    borderBottomLeftRadius: relativeWidth(22),
    borderBottomRightRadius: relativeWidth(22),
    flex: 4 / 7,
    width: '100%',
  },
  questionTextStyles: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(14),
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: lineHeight(24),
    textAlign: 'center',
  },
  questionTextView: {
    alignSelf: 'center',
    flex: 3 / 5,
    justifyContent: 'center',
    width: '80%',
  },
  nextButtonView: {
    alignSelf: 'flex-end',
    flex: 1 / 8,
    width: '100%',
  },

  progressView: {
    width: '50%',
    height: '2%',
    alignSelf: 'center',
    flex: 1 / 4,
    justifyContent: 'center',
  },
  headerTextView: {
    alignContent: 'center',
    alignSelf: 'center',
    flex: 1 / 5,
    justifyContent: 'center',
    width: '80%',
  },
  headerText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.MEDIUM_ORCHID,
    marginTop: relativeHeight(80),
    letterSpacing: 0.2,
    fontSize: 14,
    lineHeight: lineHeight(20),
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'center',
  },
  progressText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(18),
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: lineHeight(24),
    textAlign: 'center',
  },

  rowView: {flexDirection: 'row', paddingBottom: 17},

  sliderBar: {
    alignSelf: 'center',
    flex: 1 / 4,
    justifyContent: 'center',
    width: '87.5%',
  },

  storyText: {
    alignSelf: 'center',
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: relativeFontSize(15),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: lineHeight(22.5),
    width: '83%',
  },

  storyIconView: {
    flex: 1 / 8,
    alignSelf: 'center',
  },

  storyIcon: {
    width: relativeWidth(4),
    height: relativeHeight(9),
    top: relativeHeight(-40),
  },

  storyView: {
    alignSelf: 'center',
    flex: 1,
    width: '90%',
  },

  vignetteStory: {
    alignSelf: 'flex-start',
    borderRadius: relativeWidth(22),
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});

export {styles};
