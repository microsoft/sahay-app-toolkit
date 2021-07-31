import React, {ReactElement} from 'react';
import {Fab, Icon, NativeBase} from 'native-base';
import {styles} from './FAB.styles';
import {IFabProps} from './FAB.types';

const FAB = (props: NativeBase.Fab & IFabProps): ReactElement => {
  return (
    <Fab
      style={{...styles.nextButton, backgroundColor: props.color}}
      position="topRight"
      {...props}>
      <Icon
        type="MaterialIcons"
        name="navigate-next"
        style={styles.nextButtonIcon}
      />
    </Fab>
  );
};

export {FAB};
