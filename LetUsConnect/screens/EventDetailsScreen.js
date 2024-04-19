// EventDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { eventId } = route.params;

  // Fetch event details using eventId from backend API

  return (
    <View>
      <Text>Event Details Screen</Text>
      <Text>Event ID: {eventId}</Text>
      {/* Render event details here */}
    </View>
  );
};

export default EventDetailsScreen;
