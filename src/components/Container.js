import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../styles/colors';
import {IMG} from '../styles/images';

const Container = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ImageBackground source={IMG.bg} resizeMode="cover">
            <View style={styles.content}>{children}</View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bodyColor,
    height: '100%',
    position: 'relative',
    zIndex: 1,
  },

  content: {
    paddingHorizontal: 24,
    position: 'relative',
  },
});
export default Container;
