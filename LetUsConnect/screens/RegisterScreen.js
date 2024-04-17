import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Here you would add the user data to your storage
        alert("User registered successfully!");
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 10 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 10 }}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;
