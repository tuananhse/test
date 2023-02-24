import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import HorizontalItem from './HorizontalItem';

const HorizontalList = ({data}) => {
  const renderItem = ({item}) => {
    return <HorizontalItem data={item} />;
  };

  return (
    <View key={data.id} style={styles.container}>
      <View style={styles.subject}>
        <Text style={styles.subjectTitle}>{data.text}</Text>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data.child}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  subject: {
    marginBottom: 26,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: colors.textBold,
  },
});
export default HorizontalList;
