import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [username, setUsername] = useState('');
  const [editingUsername, setEditingUsername] = useState('');

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedImageUri = await AsyncStorage.getItem('profileImage');
      setUsername(storedUsername || "Your Name");
      setImageUri(storedImageUri);
    } catch (error) {
      console.error('Error loading profile data:', error);
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
        const selectedImageUri = result.assets[0].uri;
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          selectedImageUri,
          [{ resize: { width: 300, height: 300 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        setImageUri(manipulatedImage.uri);
        await AsyncStorage.setItem('profileImage', manipulatedImage.uri);
      } else {
        console.log('Image selection cancelled or invalid URI:', result);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleUsernameChange = async () => {
    try {
      setUsername(editingUsername);
      await AsyncStorage.setItem('username', editingUsername);
      setEditingUsername('');
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{username}</Text>
      <TouchableOpacity onPress={() => setEditingUsername(username)} style={styles.editIcon}>
        <MaterialIcons name="edit" size={24} color="black" />
      </TouchableOpacity>
      <Image source={{ uri: imageUri || 'https://via.placeholder.com/150' }} style={styles.profileImage} />
      <Button title="Change Profile Picture" onPress={pickImage} />
      {editingUsername !== '' && (
        <View style={styles.editSection}>
          <TextInput
            style={styles.input}
            onChangeText={setEditingUsername}
            value={editingUsername}
            placeholder="Edit your username"
            autoFocus={true}
          />
          <Button title="Save Changes" onPress={handleUsernameChange} color="#4CAF50" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  editSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
