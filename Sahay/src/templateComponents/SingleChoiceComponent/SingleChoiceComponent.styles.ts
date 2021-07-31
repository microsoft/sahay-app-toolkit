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
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    color: Colors.LIGHT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(14),
    fontStyle: 'normal',
    fontWeight: 'normal',
    margin: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  freeText: {
    width: '85%',
    height: '60%',
    alignSelf: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: relativeWidth(24),
    justifyContent: 'center',
  },

  linearGradient: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexShrink: 1 / 17,

    justifyContent: 'center',
  },

  nextButton: {
    width: relativeWidth(7.55),
    height: relativeHeight(13.5),
    alignSelf: 'flex-end',
    backgroundColor: Colors.SUNSHADE,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.15,
    shadowRadius: relativeWidth(2),
  },
  nextButtonIcon: {
    fontSize: relativeFontSize(45),
  },

  nextButtonUnselected: {
    width: relativeWidth(7.55),
    height: relativeHeight(13.5),
    alignSelf: 'flex-end',
    backgroundColor: Colors.GREY_WHITE,
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.15,
    shadowRadius: relativeWidth(2),
  },

  optionsText: {
    color: Colors.LIGHT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(14),
    fontStyle: 'normal',
    fontWeight: 'normal',
  },

  questionView: {
    flexGrow: 4 / 9,
  },
  optionContainer: {
    flexShrink: 4 / 7,
  },

  paragraph: {
    color: Colors.BLACK,
    flexShrink: 1,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: relativeFontSize(16),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: lineHeight(24),
    margin: 24,
    textAlign: 'left',
  },

  questionContainer: {
    alignSelf: 'center',
    flex: 1 / 7,
    top: 22,
    width: '85%',
  },

  questionText: {
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: relativeFontSize(16),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: lineHeight(24),
  },

  nextButtonView: {
    flex: 1 / 6,
    width: '100%',
  },
  reportCardView: {
    alignSelf: 'center',
    backgroundColor: Colors.GREY_WHITE,
    borderRadius: 8,
    flex: 6 / 8,
    width: '90%',
  },

  reportProgress: {
    width: '15%',
    height: '44%',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: Colors.LIGHT_BLACK,
    fontSize: relativeFontSize(16),
    position: 'absolute',
  },

  reportText: {
    color: Colors.BLUE_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: relativeFontSize(14),
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: lineHeight(24),
  },
});

export {styles};
