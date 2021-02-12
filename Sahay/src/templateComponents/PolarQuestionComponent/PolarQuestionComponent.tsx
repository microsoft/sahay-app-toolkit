import React, {ReactElement, useState} from 'react';
import {View, Text, SafeAreaView, TouchableNativeFeedback} from 'react-native';
import {Colors} from '../../../constants';
import {styles} from './PolarQuestionComponent.styles';
import {IPolarQuestionComponentProps} from './PolarQuestionComponent.types';

const PolarQuestionComponent = ({
  data,
  themeColor,
}: IPolarQuestionComponentProps): ReactElement => {
  const componentState = {
    questionIdentifier: 'quid1',
    nextQuestion: '',
  };
  const [currentComponentState] = useState(componentState);

  const ImageComponent = data[currentComponentState.questionIdentifier].image;
  const text = data[currentComponentState.questionIdentifier].text;
  const onPressNo = data[currentComponentState.questionIdentifier].onPressNo;
  const onPressYes = data[currentComponentState.questionIdentifier].onPressYes;
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
              <Text style={[styles.buttonText, {color: themeColor.MAIN_COLOR}]}>
                No
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => onPressYes()}>
            <View
              style={[
                styles.buttonView,
                {backgroundColor: themeColor.MAIN_COLOR},
              ]}>
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
