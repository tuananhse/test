import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    borderRadius: 4,
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Button;
