import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const ResourcesScreen = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const savedFiles = await AsyncStorage.getItem('files');
      if (savedFiles) {
        setFiles(JSON.parse(savedFiles));
      }
    } catch (error) {
      console.error('Error loading files:', error);
    }
  };

  const saveFiles = async (updatedFiles) => {
    try {
      await AsyncStorage.setItem('files', JSON.stringify(updatedFiles));
    } catch (error) {
      console.error('Error saving files:', error);
    }
  };

  const handleFileUpload = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync();
      if (document.type === 'success') {
        const newFile = { name: document.name, uri: document.uri };
        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);
        await saveFiles(updatedFiles);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileDownload = async (fileUri) => {
    try {
      // Implement file download logic here
      // For demonstration purposes, we'll show an alert
      Alert.alert('File Downloaded', 'The file has been downloaded successfully.');
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Error', 'Failed to download the file. Please try again later.');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFileDownload(item.uri)} style={styles.fileItem}>
      <MaterialIcons name="description" size={24} color="#3f51b5" />
      <Text style={styles.fileName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Upload File" onPress={handleFileUpload} />
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fileName: {
    marginLeft: 10,
    color: '#3f51b5',
    fontSize: 16,
  },
});

export default ResourcesScreen;
