import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      console.log('handle loading');
      setIsLoading(!isLoading);

      setTimeout(() => {
        console.log('handle login');
        setUser(1);
      }, 1000);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
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
