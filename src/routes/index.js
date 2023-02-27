import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import colors from '../styles/colors';
import {IMG} from '../styles/images';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: '10%',

          backgroundColor: colors.white,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Image source={IMG.icHome} />,
        }}
      />
      <Tab.Screen
        name="Support"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View>
              <Image source={IMG.icNotification} />
              <View style={styles.badge} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Image source={IMG.icCard} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <Image source={IMG.icProfile} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default function RouteContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FC5A5A',
    position: 'absolute',
    right: 4,
    top: 4,
  },
});
