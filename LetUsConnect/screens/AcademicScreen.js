import React from 'react';
import { View, Text, Button } from 'react-native';

function AcademicScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Academic Management Screen</Text>
      <Text>Manage your academic calendar and schedules.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default AcademicScreen;
