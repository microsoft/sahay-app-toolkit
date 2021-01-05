import {StyleSheet} from 'react-native';
import {
  relativeFontSize,
  relativeHeight,
  relativeWidth,
} from '../../constants';
import {Colors} from '../../constants';

const styles = StyleSheet.create({
  nextButton: {
    width: relativeWidth(7.55),
    height: relativeHeight(14),
    alignSelf: 'flex-end',
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.15,
    shadowRadius: relativeWidth(2),
  },
  nextButtonIcon: {
    fontSize: relativeFontSize(45),
  },
});

export {styles};
