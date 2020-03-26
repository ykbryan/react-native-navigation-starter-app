import React from 'react';
import { Text, View, Button } from 'react-native';

export default function({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title='Save'
        onPress={() => {
          navigation.replace('Home');
        }}
      />
    )
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Modal')} title='Open Modal' />
    </View>
  );
}
