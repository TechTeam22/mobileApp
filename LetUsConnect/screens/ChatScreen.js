import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

function ChatScreen({ navigation }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch friends list from backend when component mounts
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    // Fetch list of friends from backend and update state
    // Example: const response = await fetch('api/friends');
    // const data = await response.json();
    // setFriends(data.friends);
  };

  const handleSendFriendRequest = async (username) => {
    // Send friend request to username
    // Example: await fetch('api/send-friend-request', { method: 'POST', body: JSON.stringify({ username }) });
  };

  const handleAcceptFriendRequest = async (username) => {
    // Accept friend request from username
    // Example: await fetch('api/accept-friend-request', { method: 'POST', body: JSON.stringify({ username }) });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Text>Friends:</Text>
      {friends.map((friend) => (
        <View key={friend.id}>
          <Text>{friend.username}</Text>
          {friend.status === 'pending' && (
            <Button title="Accept Request" onPress={() => handleAcceptFriendRequest(friend.username)} />
          )}
        </View>
      ))}
      <Button title="Send Friend Request" onPress={() => handleSendFriendRequest('username')} />
    </View>
  );
}

export default ChatScreen;
