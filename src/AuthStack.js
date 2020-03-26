import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/AuthScreen';
import SignUpScreen from './Screens/AuthScreen';

const AuthStack = createStackNavigator();

export default function AuthStack({ navigation }) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='SignUp' component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
