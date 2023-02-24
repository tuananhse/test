import React from 'react';
import {Text, View} from 'react-native';
import Card from '../../components/Card';
import Container from '../../components/Container';
import MyHeader from '../../components/Header';
import HorizontalList from '../../components/HorizontalList';
import {data} from './data';
import styles from './styles';
const HomeScreen = () => {
  return (
    <Container>
      <View>
        <MyHeader />
        <Text style={styles.title}>Silver Tier</Text>
        <Text style={styles.description}>
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </Text>
        <View style={styles.cardContainer}>
          <Card />
        </View>
        {data.map(item => (
          <View key={item.id}>
            <HorizontalList data={item} />
          </View>
        ))}
      </View>
    </Container>
  );
};

export default HomeScreen;
