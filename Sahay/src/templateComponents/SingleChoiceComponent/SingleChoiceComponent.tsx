import * as React from 'react';
import {Text, View, TextInput, BackHandler} from 'react-native';
import {styles} from './SingleChoiceComponent.styles';
import {CheckBox, ListItem, Body} from 'native-base';
import {
  IButtonState,
  IComponentState,
  ISingleChoiceCompProps,
} from './SingleChoiceComponent.types';
import {Fragment, ReactElement, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import {Dispatch} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationScenes} from '../../AppNavigator/AppNavigator.types';
import {FAB} from '../FAB';
import {Colors} from '../../../constants';

export const SingleChoiceComponent = ({
  screenData,
  linearGradientTheme,
  themeColor,
}: ISingleChoiceCompProps): ReactElement => {
  const buttonState: Array<IButtonState> = [
    {choiceId: 1, checkBoxChosen: false},
    {choiceId: 2, checkBoxChosen: false},
    {choiceId: 3, checkBoxChosen: false},
    {choiceId: 4, checkBoxChosen: false},
  ];

  const componentState: IComponentState = {
    currentQuestion: 'quid1',
    nextQuestionPointer: '',
    nextGotoComponent: undefined,
    nextGotoProps: {},
  };

  const [currentButtonState, setButtonState] = useState(buttonState);
  const [currentComponentState, setComponentState] = useState(componentState);

  const [freetext, setFreeText] = useState('');

  const dispatch: Dispatch = useDispatch();

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {screenData[currentComponentState.currentQuestion].title}
          </Text>
        </View>

        <View style={styles.reportCardView}>
          <LinearGradient
            useAngle={true}
            angle={90}
            locations={[0.25, 1.1]}
            colors={linearGradientTheme}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              {screenData[currentComponentState.currentQuestion].CardStatus}
            </Text>
            <Text style={styles.reportProgress}>
              {screenData[currentComponentState.currentQuestion].progress +
                ' of ' +
                Object.keys(screenData).length}
            </Text>
          </LinearGradient>

          <View style={styles.questionView}>
            <Text
              style={styles.paragraph}
              accessible={true}
              accessibilityLabel={
                screenData[currentComponentState.currentQuestion].description
              }
              accessibilityRole="text">
              {screenData[currentComponentState.currentQuestion].description}
            </Text>
          </View>
          <View style={styles.optionContainer}>
            {screenData[currentComponentState.currentQuestion].choice.map(
              (item) => {
                const {choiceId} = item;
                const {label} = item;
                const {showFreeText} = item;
                const {goto} = screenData[
                  currentComponentState.currentQuestion
                ];
                const {gotoProps} = screenData[
                  currentComponentState.currentQuestion
                ];

                currentComponentState.nextGotoComponent = goto;
                currentComponentState.nextGotoProps = gotoProps;

                return (
                  <View>
                    <ListItem key={choiceId} style={{borderBottomWidth: 0}}>
                      <CheckBox
                        color={themeColor}
                        checked={
                          currentButtonState[choiceId - 1].checkBoxChosen
                        }
                        onPress={() => {
                          const toggleCheckBoxValue = !currentButtonState[
                            choiceId - 1
                          ].checkBoxChosen;
                          const newButtonState: Array<IButtonState> = [
                            ...buttonState,
                          ];
                          newButtonState[
                            choiceId - 1
                          ].checkBoxChosen = toggleCheckBoxValue;
                          setButtonState(newButtonState);
                        }}
                        style={{borderRadius: 12, marginRight: 30}}
                      />
                      <Body>
                        <Text style={styles.optionsText}>{label}</Text>
                      </Body>
                    </ListItem>
                    <View>
                      {currentButtonState[choiceId - 1].checkBoxChosen ==
                        true && showFreeText == true ? (
                        <View style={styles.freeText}>
                          <TextInput
                            placeholder="Please elaborate"
                            onChangeText={(freetext) => setFreeText(freetext)}
                            defaultValue={freetext}
                          />
                        </View>
                      ) : null}
                    </View>
                  </View>
                );
              },
            )}
          </View>
        </View>

        <View
          style={styles.nextButtonView}
          accessible={true}
          accessibilityLabel={'Next Button'}
          accessibilityLiveRegion="polite"
          accessibilityRole="button">
          <FAB
            onPress={() => {
              const currentChoiceId = currentButtonState.find(
                (buttonItem) => buttonItem.checkBoxChosen == true,
              )?.choiceId;
              const newNextQuestion = screenData[
                currentComponentState.currentQuestion
              ].choice.find(
                (choiceItem) => choiceItem.choiceId == currentChoiceId,
              )?.next;

              const newChoiceGoto = screenData[
                currentComponentState.currentQuestion
              ].choice.find(
                (choiceItem) => choiceItem.choiceId == currentChoiceId,
              )?.choiceGoto;

              const newNextGotoComponent = newChoiceGoto
                ? newChoiceGoto
                : currentComponentState.nextGotoComponent;

              currentChoiceId
                ? newNextGotoComponent
                  ? Actions.push(
                      newNextGotoComponent,
                      currentComponentState.nextGotoProps,
                    )
                  : (setButtonState(buttonState),
                    setComponentState({
                      ...currentComponentState,
                      currentQuestion: newNextQuestion
                        ? newNextQuestion
                        : 'quid1',
                      nextQuestionPointer: '',
                      nextGotoComponent: newNextGotoComponent,
                      nextGotoProps: currentComponentState.nextGotoProps,
                    }))
                : null;
            }}
            color={
              currentButtonState.find(
                (buttonItem) => buttonItem.checkBoxChosen == true,
              )
                ? themeColor
                : Colors.GREY
            }
          />
        </View>
      </View>
    </Fragment>
  );
};
