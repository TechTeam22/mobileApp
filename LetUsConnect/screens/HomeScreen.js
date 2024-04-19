import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button, Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  // Define each feature with a specific icon color
  const features = [
    { name: 'Chat', icon: 'chat', color: '#f44336', screen: 'Chat' },
    { name: 'Academic', icon: 'school', color: '#3f51b5', screen: 'Academic' },
    { name: 'Resources', icon: 'folder', color: '#ffc107', screen: 'Resources' },
    { name: 'Marketplace', icon: 'store', color: '#4caf50', screen: 'Marketplace' },
    { name: 'Campus Map', icon: 'map', color: '#ff6347', screen: 'Map' }  // Map feature added
  ];

  const logout = () => {
    navigation.replace('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tileContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity key={index} style={styles.tile} onPress={() => navigation.navigate(feature.screen)}>
            <Card style={[styles.card, {backgroundColor: feature.color}]}>
              <Icon name={feature.icon} size={40} color="white" />
              <Title style={styles.title}>{feature.name}</Title>
            </Card>
          </TouchableOpacity>
        ))}
      </View>
      <Button icon="logout" mode="contained" onPress={logout} style={styles.logoutButton}>
        Logout
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tile: {
    margin: 5,
    width: '40%', // Adjust size accordingly
  },
  card: {
    height: 120, // Keeping square shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white', // Text color for contrast
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff6666', // Lighter red color for the logout button
    color: 'white',
  }
});

export default HomeScreen;
