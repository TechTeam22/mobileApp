import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const features = [
    { name: 'Chat', icon: 'chat', color: '#f44336', screen: 'Chat' },
    { name: 'Academic', icon: 'school', color: '#3f51b5', screen: 'Academic' },
    { name: 'Resources', icon: 'folder', color: '#ffc107', screen: 'Resources' },
    { name: 'Marketplace', icon: 'store', color: '#4caf50', screen: 'Marketplace' },
    { name: 'Campus Map', icon: 'map', color: '#ff6347', screen: 'Map' },
    { name: 'Profile', icon: 'account-circle', color: '#d32f2f', screen: 'Profile' }
  ];

  const handleLogout = async () => {
    // Perform logout actions as needed
    // For example, clear AsyncStorage
    navigation.navigate('Login');
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
      <TouchableOpacity style={styles.logoutButtonContainer} onPress={handleLogout}>
        <Text style={styles.logoutButton}>Logout</Text>
      </TouchableOpacity>
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
  logoutButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButton: {
    fontSize: 18,
    color: '#d9534f', // Red color for the logout button
    fontWeight: 'bold',
  }
});

export default HomeScreen;
