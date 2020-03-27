import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HistoryScreen from './Screens/HistoryScreen';
import SettingsScreen from './Screens/SettingsScreen';
// TODO: need detail screen
import DetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';
import ModalScreen from './Screens/AuthScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const HomeStack = createStackNavigator();
// const HistoryStack = createStackNavigator();
// const SettingsStack = createStackNavigator();

// const HomeStackNavigator = ({ navigation, route }) => {
//   if (route.state) {
//     navigation.setOptions({
//       tabBarVisible: route.state.index > 0 ? false : true
//     });
//   }
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         options={({ route }) => ({
//           title: getHeaderTitle(route)
//         })}
//         name='Home'
//         component={HomeScreen}
//       />
//     </HomeStack.Navigator>
//   );
// };

// const HistoryStackNavigator = ({ navigation, route }) => {
//   if (route.state) {
//     navigation.setOptions({
//       tabBarVisible: route.state.index > 0 ? false : true
//     });
//   }
//   return (
//     <HistoryStack.Navigator>
//       <HistoryStack.Screen
//         options={({ route }) => ({
//           title: getHeaderTitle(route)
//         })}
//         name='History'
//         component={HistoryScreen}
//       />
//       <HistoryStack.Screen name='Details' component={DetailsScreen} />
//     </HistoryStack.Navigator>
//   );
// };

// const SettingsStackNavigator = ({ navigation, route }) => {
//   if (route.state) {
//     navigation.setOptions({
//       tabBarVisible: route.state.index > 0 ? false : true
//     });
//   }
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen
//         options={({ route }) => ({
//           title: getHeaderTitle(route)
//         })}
//         name='Settings'
//         component={SettingsScreen}
//       />
//     </SettingsStack.Navigator>
//   );
// };

function getHeaderTitle(route) {
  const routeName = route.name;
  switch (routeName) {
    case 'History':
      return 'My Travel Records';
    case 'Settings':
      return 'My Settings';
    default:
      return 'Welcome';
  }
}

function shouldHeaderBeShown(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'HomeTab';

  switch (routeName) {
    // case 'HomeTab':
    // case 'HistoryTab':
    // case 'SettingsTab':
    default:
      return false;
    //   return true;
  }
}

const HomeTabNavigator = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == 'Home') iconName = 'ios-home';
          else if (route.name == 'History') iconName = 'ios-globe';
          else if (route.name == 'Settings') iconName = 'ios-settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen
        options={route => ({
          title: 'Home',
          headerShown: shouldHeaderBeShown(route)
        })}
        name='Home'
        component={HomeScreen}
      />
      <Tab.Screen
        options={() => ({
          title: 'History'
        })}
        name='History'
        component={HistoryScreen}
      />
      <Tab.Screen
        options={() => ({
          title: 'Settings'
        })}
        name='Settings'
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default function AppContainer() {
  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: true, gestureDirection: 'horizontal' }}
      headerMode='float'
      mode='modal'
    >
      <Stack.Screen
        options={({ route }) => ({
          headerShown: shouldHeaderBeShown(route)
        })}
        name='HomeTabNavigator'
        component={HomeTabNavigator}
      />
      <Stack.Screen
        options={() => ({
          headerShown: false
        })}
        name='Modal'
        component={ModalScreen}
      />
    </Stack.Navigator>
  );
}
