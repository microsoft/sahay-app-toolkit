import {StyleSheet} from 'react-native';
import { Colors, Fonts, lineHeight, relativeFontSize } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    alignItems: 'center',
    flex: 2 / 3,
    width: '85%',
  },
  descriptionText: {
    color: Colors.GREY_24,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    fontSize: relativeFontSize(16),
    fontWeight: '500',
    lineHeight: lineHeight(22),
    marginBottom: 3,
    marginTop: 3
  },
  introImageView: {
    aspectRatio: 7 / 8,
    flex: 2 / 3,
    justifyContent: 'center',
  },
  nextButtonView: {
    alignItems: 'center',
    flex: 2 / 7,
    justifyContent: 'center',
    textAlign: 'center',
    width: '90%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
    width: '95%',
  },
});

export {styles};
