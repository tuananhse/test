import React, {useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';

const Progress = () => {
  const [progress, setProgress] = useState(new Animated.Value(65));

  const progressWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressLine, {width: progressWidth}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  progressContainer: {
    height: 5,
    backgroundColor: colors.progressActive,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressLine: {
    height: '100%',
    backgroundColor: colors.progressLine,
  },
});

export default Progress;
