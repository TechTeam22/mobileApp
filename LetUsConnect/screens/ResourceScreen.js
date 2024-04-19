import React from 'react';
import { View, Text, Button } from 'react-native';

function ResourceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Resource Navigation Screen</Text>
      <Text>Find and utilize campus resources.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ResourceScreen;
