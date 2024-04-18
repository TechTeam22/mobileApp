import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Welcome Event',
    date: '2024-04-25',
    location: 'Main Hall',
    description: 'Join us for the welcome event to kick off the new academic year with fun and networking!'
  },
  // Add more events or details as needed
];

const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Button
            title="View Details"
            onPress={() => navigation.navigate('Details', { item })}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
