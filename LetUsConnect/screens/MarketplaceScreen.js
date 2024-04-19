import React from 'react';
import { View, Text, Button } from 'react-native';

function MarketplaceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Marketplace Screen</Text>
      <Text>Find and purchase essentials tailored to college needs.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default MarketplaceScreen;
