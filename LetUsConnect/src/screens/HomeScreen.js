import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome Home!</Text>
            <Button title="Logout" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default HomeScreen;
