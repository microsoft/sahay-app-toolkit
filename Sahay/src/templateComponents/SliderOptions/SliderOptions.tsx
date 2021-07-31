import React, {ReactElement, useState, Fragment, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './SliderOptions.styles';
import {ISliderProps} from './SliderOptions.types';
import Slider from 'react-native-slider';

const SliderOptions = ({
  data,
  selectedOption = 1,
  setSelectedOption,
  theme,
}: ISliderProps): ReactElement => {
  // This is used to decide the step size and width of the slider.
  const [allocationFactor, setAllocationFactor] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const markersArray = [];

  for (let i = 0; i < data.length - 2; i++) {
    markersArray.push('|');
  }

  useEffect(() => {
    setAllocationFactor(100 / data.length);
    /**
     * If Selected Option is 1 from Props then slider value is reset to 0.
     * Default value of Selected Option is always 1.
     */
    if (selectedOption === 1 || selectedOption > data.length) {
      setSliderValue(0);
    } else {
      setSliderValue((selectedOption - 1) * allocationFactor);
    }
  }, [data, selectedOption, allocationFactor]);

  return (
    <Fragment>
      <View style={styles.sliderContainer}>
        <Slider
          thumbStyle={[styles.thumb, {backgroundColor: theme.MAIN_COLOR}]}
          trackStyle={[styles.track, {backgroundColor: theme.MAIN_COLOR}]}
          minimumValue={0}
          maximumValue={100 - allocationFactor}
          minimumTrackTintColor={theme.MAIN_COLOR}
          step={allocationFactor}
          value={sliderValue}
          onSlidingComplete={(v: number) => {
            setSliderValue(v);
            const selectedOptionValue = v / allocationFactor + 1;
            setSelectedOption(selectedOptionValue);
          }}
        />
        <View style={styles.markerView}>
          <Text />
          {markersArray.map((marker, index) => {
            return (
              <Text
                key={index}
                style={[styles.markerText, {color: theme.MAIN_COLOR}]}>
                {marker}
              </Text>
            );
          })}
          <Text />
        </View>
      </View>

      <View style={styles.optionView}>
        {data.map((option, index) => {
          return (
            <Text
              key={index}
              style={[styles.optionText, {width: `${allocationFactor}%`}]}>
              {option}
            </Text>
          );
        })}
      </View>
    </Fragment>
  );
};

export {SliderOptions};
