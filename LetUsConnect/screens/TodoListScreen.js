// TodoListScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoListScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    if (!task.trim()) {
      Alert.alert('Error', 'Please enter a task');
      return;
    }
    
    try {
      // Save task to AsyncStorage or your preferred database
      // Example using AsyncStorage:
      const existingTasks = JSON.parse(await AsyncStorage.getItem('tasks')) || [];
      const newTask = { task, dateTime: new Date().toISOString() }; // Store current date and time with task
      const updatedTasks = [...existingTasks, newTask];
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

      // Navigate back to Home screen after adding task
      navigation.goBack();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default TodoListScreen;
