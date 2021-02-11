import React, {ReactElement} from 'react';
import {View, Text, SafeAreaView, TouchableNativeFeedback} from 'react-native';
import {Colors} from '../../../constants';
import {styles} from './PolarQuestionComponent.styles';
import {IPolarQuestionComponentProps} from './PolarQuestionComponent.types';

const PolarQuestionComponent = ({
  text,
  image,
  onPressYes,
  onPressNo,
}: IPolarQuestionComponentProps): ReactElement => {
  const ImageComponent = image;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageView}>
          <ImageComponent />
        </View>
        <View style={styles.textView}>
          <Text style={styles.mainText}>{text}</Text>
        </View>
        <View style={styles.optionsView}>
          <TouchableNativeFeedback onPress={() => onPressNo()}>
            <View style={[styles.buttonView, {backgroundColor: Colors.WHITE}]}>
              <Text style={[styles.buttonText, {color: Colors.SUMMER_SKY}]}>
                No
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => onPressYes()}>
            <View
              style={[styles.buttonView, {backgroundColor: Colors.SUMMER_SKY}]}>
              <Text style={[styles.buttonText, {color: Colors.WHITE}]}>
                Yes
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {PolarQuestionComponent};
