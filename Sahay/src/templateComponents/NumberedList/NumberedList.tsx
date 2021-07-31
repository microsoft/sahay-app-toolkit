import {View} from 'native-base';
import React from 'react';
import {ReactElement} from 'react';
import {FlatList, Text} from 'react-native';
import {Image} from 'react-native';
import {FAB} from '../FAB';
import {styles} from './NumberedList.styles';
import {INumberListProps} from './NumberedList.types';

const NumberedList = ({
  dataSource,
  nextGoto,
}: INumberListProps): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.reportCardView}>
        <View style={styles.vignetteStory}>
          <View style={styles.storyIconView}>
            <Image source={dataSource.headerImage} style={styles.storyIcon} />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>{dataSource.headerTitle}</Text>
          </View>
          <View style={styles.storyView}>
            <FlatList
              data={dataSource.listData}
              renderItem={({item}) => (
                <View style={styles.rowView}>
                  <View style={styles.circle}>
                    <Text style={styles.bulletStyle}>{item.num}</Text>
                  </View>
                  <Text style={styles.bulletItemStyle}>{item.key}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <View
        style={styles.nextButtonView}
        accessible={true}
        accessibilityLabel={'Next Button'}
        accessibilityLiveRegion="polite"
        accessibilityRole="button">
        <FAB
          color={dataSource.themeColor.MAIN_COLOR}
          onPress={() => {
            nextGoto();
          }}
        />
      </View>
    </View>
  );
};

export {NumberedList};
