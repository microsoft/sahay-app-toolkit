import {StyleSheet} from 'react-native';
import {
  Fonts,
  Colors,
  lineHeight,
  relativeHeight,
  relativeWidth,
  relativeFontSize,
} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 8 / 9,
    justifyContent: 'center',
  },
  reportCardView: {
    alignSelf: 'center',
    borderRadius: relativeWidth(22),
    flex: 2 / 3,
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

  progressText: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(18),
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 0.15,
    lineHeight: lineHeight(24),
    textAlign: 'center',
  },

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
    alignSelf: 'center',
    flex: 1 / 2,
    top: relativeHeight(-14),
  },

  storyView: {
    flex: 5 / 6,
  },

  vignetteStory: {
    alignSelf: 'flex-start',
    flex: 5 / 7,
    justifyContent: 'center',
    width: '100%',
  },
});

export {styles};
