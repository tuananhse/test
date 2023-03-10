import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../styles/colors';
import {IMG} from '../styles/images';

const HorizontalItem = ({data}) => {
  const checkRange = coin => {
    if (coin > 999) {
      return true;
    }
    return false;
  };
  return (
    <TouchableOpacity>
      <View key={data.id} style={[styles.container, styles.shadowProp]}>
        <Image style={styles.image} resizeMode="contain" source={data.image} />
        <View style={styles.content}>
          <Text
            style={[
              styles.coinTxt,
              {
                color: checkRange(data.number)
                  ? colors.coinColor
                  : colors.green,
              },
            ]}>
            {checkRange(data.number) && (
              <>
                <Image source={IMG.icCoin} />{' '}
              </>
            )}
            {data.number} Coins
          </Text>
          <Text numberOfLines={3} style={styles.desTxt}>
            {data.description}
          </Text>
          {data.link && <Text style={styles.link}>Insufficient coins</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    maxWidth: 199,
    minHeight: 240,
    backgroundColor: colors.white,
    marginRight: 24,
    marginBottom: 10,
  },
  shadowProp: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    padding: 16,
  },
  link: {
    color: colors.green,
    fontSize: 14,
    paddingTop: 6,
  },
  coinTxt: {
    fontSize: 16,
    fontWeight: 600,
    color: colors.green,
    marginTop: 16,
    marginBottom: 8,
  },
  desTxt: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.textGrayLight,
  },
  image: {
    width: 199,
    height: 98,
  },
});
export default HorizontalItem;
