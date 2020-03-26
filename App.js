import React, { useState, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootContainer from './src/RootContainer';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/Screens/AuthScreen';
import LoginScreen from './src/Screens/AuthScreen';
import SignUpScreen from './src/Screens/AuthScreen';

const AuthStack = createStackNavigator();
const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const getActiveRouteName = state => {
  const route = state.routes[state.index];
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
};

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigationRef = useRef();
  const routeNameRef = useRef();

  useEffect(() => {
    //TODO: update logic, this is to test the screen navigations
    setTimeout(() => {
      console.log('handle loading');
      setIsLoading(!isLoading);

      setTimeout(() => {
        console.log('handle login');
        setUser(1);
      }, 1000);
    }, 1000);

    // app state
    AppState.addEventListener('change', _handleAppStateChange);

    // this is for analytics
    const currentState = navigationRef.current.getRootState();
    if (currentState) routeNameRef.current = getActiveRouteName(currentState);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (appState !== nextAppState) {
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
        //TODO: add analytics here
      } else if (
        appState.match(/active|background/) &&
        nextAppState.match(/inactive|background/)
      ) {
        console.log('App went to the background!');
        //TODO: add analytics here
      }
      console.log('from:', appState, 'to:', nextAppState);
      setAppState(nextAppState);
    }
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        if (state) {
          const currentRouteName = getActiveRouteName(state);

          if (!previousRouteName !== currentRouteName) {
            //TODO: Add analytics here
            console.log('tracking current screen:', currentRouteName);
          }
          routeNameRef.current = currentRouteName;
        }
      }}
    >
      {isLoading ? (
        <LoadingScreen />
      ) : user ? (
        <RootContainer />
      ) : (
        <AuthStackNavigation />
      )}
    </NavigationContainer>
  );
}
