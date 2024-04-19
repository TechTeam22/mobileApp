import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AcademicScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);
  const [events, setEvents] = useState([]);
  const [assignments, setAssignments] = useState([]);

  

  useEffect(() => {
    // Fetch data for courses, events, and assignments from backend API
    fetchCourses();
    fetchEvents();
    fetchAssignments();
  }, []);

  const fetchCourses = async () => {
    // Fetch courses data from backend API
    // Example: const response = await fetch('api/courses');
    // const data = await response.json();
    // setCourses(data);
  };

  const fetchEvents = async () => {
    // Fetch events data from backend API
    // Example: const response = await fetch('api/events');
    // const data = await response.json();
    // setEvents(data);
  };

  const fetchAssignments = async () => {
    // Fetch assignments data from backend API
    // Example: const response = await fetch('api/assignments');
    // const data = await response.json();
    // setAssignments(data);
  };

  const handleCoursePress = (course) => {
    // Navigate to CourseDetails screen
    navigation.navigate('CourseDetails', { courseId: course.id });
  };

  const handleEventPress = (event) => {
    // Navigate to EventDetails screen
    navigation.navigate('EventDetails', { eventId: event.id });
  };

  const handleAssignmentPress = (assignment) => {
    // Navigate to AssignmentDetails screen
    navigation.navigate('AssignmentDetails', { assignmentId: assignment.id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Courses</Text>
      <View style={styles.tileContainer}>
        {courses.map((course) => (
          <TouchableOpacity key={course.id} style={styles.tile} onPress={() => handleCoursePress(course)}>
            <Text style={styles.tileText}>{course.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Upcoming Events</Text>
      <View style={styles.tileContainer}>
        {events.map((event) => (
          <TouchableOpacity key={event.id} style={styles.tile} onPress={() => handleEventPress(event)}>
            <Text style={styles.tileText}>{event.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Assignments</Text>
      <View style={styles.tileContainer}>
        {assignments.map((assignment) => (
          <TouchableOpacity key={assignment.id} style={styles.tile} onPress={() => handleAssignmentPress(assignment)}>
            <Text style={styles.tileText}>{assignment.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '30%',
    aspectRatio: 1, // Make the tiles square
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  tileText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AcademicScreen;
