import React, {Component, ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';

interface IProps {}

export default class App extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactNode {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {'Hello World'}
          {'\n'}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
