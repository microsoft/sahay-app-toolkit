import React, {Fragment, ReactElement, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './VignetteComponent.styles';
import LinearGradient from 'react-native-linear-gradient';
import {FAB} from '../FAB';
import {
  IComponentState,
  Options,
  QuestionPointers,
  IVignetteProps,
  responseNumberMap,
  IVignetteQuestionArray,
} from './VignetteComponent.types';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {Colors} from '../../../constants';
import {ITheme, Themes} from '../../../constants/Themes';
import { SliderOptions } from '../SliderOptions';

const goNext = (
  currentComponentState: IComponentState,
  selectedOption: number,
  gotoHome: boolean,
  vignetteScreenData: IVignetteQuestionArray,
  dispatch: Dispatch,
): void => {
  const answerChosen =
    vignetteScreenData[currentComponentState.currentQuestion].options[
      selectedOption - 1
    ];
  const prevQuestion =
    vignetteScreenData[currentComponentState.currentQuestion]?.prev;
  const nextQuestion =
    vignetteScreenData[currentComponentState.currentQuestion]?.next;

};

export const VignetteComponent = ({
  questionPointer,
  gotoHome,
  vignetteScreenData,
}: IVignetteProps): ReactElement => {
  const componentState: IComponentState = {
    currentQuestion: questionPointer,
  };

  const [currentComponentState] = useState(componentState);



  const [selectedOption, setSelectedOption] = useState(
   1
  );

  const dispatch: Dispatch = useDispatch();

  return (
    <Fragment>

      <View style={styles.container}>
        <View style={styles.progressView}>
          <Text style={styles.progressText}>
            {vignetteScreenData[currentComponentState.currentQuestion].title +
              ' ' +
              vignetteScreenData[currentComponentState.currentQuestion]
                .progress}
          </Text>
        </View>
        <LinearGradient
          useAngle={true}
          angle={90}
          locations={[0.25, 1.1]}
          colors={['rgba(255, 194, 74, 0.43)', 'rgba(255, 119, 21, 0.43)']}
          style={styles.reportCardView}>
          <View style={styles.vignetteStory}>
            <View style={styles.storyIconView}>
              <Image
                source={
                  vignetteScreenData[currentComponentState.currentQuestion]
                    .image
                }
              />
            </View>

            <View style={styles.storyView}>
              <ScrollView>
                <Text style={styles.storyText}>
                  {
                    vignetteScreenData[currentComponentState.currentQuestion]
                      .descriptionText
                  }
                </Text>
              </ScrollView>
            </View>
          </View>

          <View style={styles.questionContainer}>
            <View style={styles.questionTextView}>
              <Text style={styles.questionTextStyles}>
                {
                  vignetteScreenData[currentComponentState.currentQuestion]
                    .question
                }{' '}
              </Text>
            </View>
            <View style={styles.sliderBar}>
              <SliderOptions
                data={
                  vignetteScreenData[currentComponentState.currentQuestion]
                    .options
                }
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                theme={Themes.ORANGE_THEME as ITheme}
              />
            </View>
          </View>
        </LinearGradient>

        <View
          style={styles.nextButtonView}
          accessible={true}
          accessibilityLabel={'Next Button'}
          accessibilityLiveRegion="polite"
          accessibilityRole="button">
          <FAB
            onPress={() => {
        
              goNext(
                currentComponentState,
                selectedOption,
                gotoHome,
                vignetteScreenData,
                dispatch,
              );
            }}
            color={Colors.SUNSHADE}
          />
        </View>
      </View>
    </Fragment>
  );
};
