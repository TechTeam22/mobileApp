import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Here you would check against your user data
        if (username === "test" && password === "password") {
            navigation.navigate('Home');
        } else {
            alert("Username or Password is incorrect!");
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;
``
