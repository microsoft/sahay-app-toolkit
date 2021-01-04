import React, {Fragment, ReactElement, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Colors} from '../../../../constants';
import HTMLView from 'react-native-htmlview';
import {urlMapping} from '../../../AppNavigator/AppNavigator.types';
import { styles } from './TextImageComponent.styles';
import { TIProps } from './TextImageComponent.types';
import { FAB } from '../../FAB';

const renderDescriptionTexts = (
  textsArray: string,
): ReactElement => {
  return (
    <HTMLView
      textComponentProps={{style: styles.descriptionText}}
      value={textsArray}
      onLinkPress={(url) => {
        Actions.push(urlMapping[url]);
      }}
    />
  );
};

const TextImageComponent = ({data} : TIProps): ReactElement => {
  
  const Svg =
    data.imageComponent;
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <View style={styles.introImageView}>
          <Svg />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <ScrollView>
              {renderDescriptionTexts(
                data.descriptionTexts,
              )}
            </ScrollView>
          </View>
        </View>

        <View
          style={styles.nextButtonView}
          accessible={true}
          accessibilityLabel={'Next Button'}
          accessibilityLiveRegion="polite"
          accessibilityRole="button">
          <FAB
          color={Colors.BB_BLUE}
            style={{backgroundColor: Colors.BB_BLUE}}
            onPress={
              () => {
               
              }
            }
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export {TextImageComponent};
