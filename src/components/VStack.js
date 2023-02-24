import React from 'react';
import {View} from 'react-native';

const VStack = ({children, spacing, style}) => {
  const vStyles = {
    container: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    item: {
      marginBottom: spacing,
    },
  };

  return (
    <View style={[vStyles.containerVStack, style]}>
      {React.Children.map(children, child => (
        <View style={vStyles.item}>{child}</View>
      ))}
    </View>
  );
};

export default VStack;
