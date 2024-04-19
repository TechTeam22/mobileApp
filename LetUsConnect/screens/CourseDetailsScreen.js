// CourseDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
  const { courseId } = route.params;

  // Fetch course details using courseId from backend API

  return (
    <View>
      <Text>Course Details Screen</Text>
      <Text>Course ID: {courseId}</Text>
      {/* Render course details here */}
    </View>
  );
};

export default CourseDetailsScreen;
