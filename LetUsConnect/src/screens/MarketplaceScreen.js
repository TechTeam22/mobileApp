// src/screens/MarketplaceScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const MarketplaceScreen = () => {
  const [items, setItems] = useState([{ id: '1', name: 'Textbook' }]);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
      <Button title="Add Item" onPress={() => setItems([...items, { id: String(items.length + 1), name: 'New Item' }])} />
    </View>
  );
};

export default MarketplaceScreen;
