// AssignmentDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const AssignmentDetailsScreen = ({ route }) => {
  const { assignmentId } = route.params;

  // Fetch assignment details using assignmentId from backend API

  return (
    <View>
      <Text>Assignment Details Screen</Text>
      <Text>Assignment ID: {assignmentId}</Text>
      {/* Render assignment details here */}
    </View>
  );
};

export default AssignmentDetailsScreen;
