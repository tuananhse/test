import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';
import {IMG} from '../styles/images';

const {width, height} = Dimensions.get('window');

const MyHeader = () => {
  return (
    <View style={[styles.header, {height: 0.1 * height}]}>
      <TouchableOpacity>
        <View style={styles.backgroundIcon}>
          <Image source={IMG.icLeft} style={styles.leftIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundIcon: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftIcon: {
    width: 6,
    height: 12,
  },
});

export default MyHeader;
