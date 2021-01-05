import React, {Fragment, ReactElement, useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import {styles} from './TextImageComponent.styles';
import {ITextIntroCompProps} from './TextImageComponent.types';
import {FAB} from '../FAB';
import {urlMappingComponent} from '../../utilityComponents/urlMappingComponent';

const renderDescriptionTexts = (textsArray: string): ReactElement => {
  return (
    <HTMLView
      textComponentProps={{style: styles.descriptionText}}
      value={textsArray}
      onLinkPress={(url) => {
        Actions.push(urlMappingComponent[url]);
      }}
    />
  );
};

const TextImageComponent = ({
  data,
  theme,
}: ITextIntroCompProps): ReactElement => {
  const componentState = {
    questionIdentifier: 'quid1',
    nextQuestion: '',
  };

  const [currentComponentState, setComponentState] = useState(componentState);

  const Svg = data[currentComponentState.questionIdentifier].imageComponent;
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
                data[currentComponentState.questionIdentifier].descriptionTexts,
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
            color={theme.MAIN_COLOR}
            onPress={() => {
              const nextGoto =
                data[currentComponentState.questionIdentifier].goto;
              const nextQ = data[currentComponentState.questionIdentifier].next;
              nextGoto
                ? Actions.push(nextGoto)
                : setComponentState({
                    ...currentComponentState,
                    questionIdentifier: nextQ ? nextQ : 'quid1',
                    nextQuestion: '',
                  });
            }}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export {TextImageComponent};
