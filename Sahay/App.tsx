import React, {Component, ReactNode} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {IFlatListCompData} from './App.types';
import {Themes} from './constants/Themes';
import {NavigationScenes} from './src/AppNavigator/AppNavigator.types';
import {exampleTextImgData} from './src/content-examples/englishSpeakingTutorial/TextIntroData/data';
import {ComponentType} from './src/SahayFramework/SahayFramework.types';

interface IProps {}

export default class App extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): ReactNode {
    const componentData: Array<IFlatListCompData> = [
      {
        componentName: 'Text Image Component',
        goto: NavigationScenes.SAHAY_TEXT_IMAGE_COMPONENT,
        gotoProps: {
          content: exampleTextImgData,
          componentType: ComponentType.TEXT_IMAGE_COMPONENT,
          themeColor: Themes.ORANGE_THEME,
        },
      },
      {
        componentName: 'Polar Type Question Component',
        goto: NavigationScenes.SAHAY_POLAR_QUESTION_COMPONENT,
      },
    ];
    return (
      <FlatList
        data={componentData}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View style={styles.componentNameView}>
              <Text style={styles.title}>{item.componentName}</Text>
            </View>

            <TouchableOpacity
              style={styles.gotoStyle}
              onPress={() => {
                Actions.push(item.goto);
              }}>
              <Text style={{color: 'green'}}>Check</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.componentName}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  componentNameView: {alignItems: 'center', flex: 1},
  title: {fontWeight: 'bold'},
  gotoStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
