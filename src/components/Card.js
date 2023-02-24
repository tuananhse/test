import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../styles/colors';
import {IMG} from '../styles/images';
import Button from './Button';
import Progress from './Progress';
import VStack from './VStack';

const Card = () => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <ImageBackground source={IMG.bgCard} resizeMode={'contain'}>
        <VStack spacing={16} style={styles.content}>
          <Text style={styles.titleTxt}>Available Coin balance</Text>
          <Text style={styles.pointTxt}>340</Text>
          <View style={styles.progress}>
            <Progress />
          </View>
          <Text style={styles.descriptionTxt}>
            You have paid rental fee for $1,200.{'\n'}Pay more $800 to achieve
            Gold Tier.
          </Text>
          <TouchableOpacity>
            <Text style={styles.buttonTxt}>
              View tier benefits <Image source={IMG.icNext} />
            </Text>
          </TouchableOpacity>

          <Button title="My Coupons" style={styles.button} />
          <Text style={styles.updatedTxt}>Updated : 02/11/2021</Text>
        </VStack>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  content: {
    padding: 24,
    paddingBottom: 8,
  },
  progress: {
    paddingBottom: 18,
    paddingTop: 16,
  },
  shadowProp: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  titleTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textGray,
  },
  pointTxt: {
    fontSize: 48,
    fontWeight: '400',
  },
  descriptionTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textGrayLight,
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.green,
    alignItems: 'center',
    paddingBottom: 8,
  },
  updatedTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textGray,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.black,
  },
});
export default Card;
