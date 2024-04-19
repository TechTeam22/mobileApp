import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Alert, Animated } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginScreen = ({ navigation }) => {
  const [loginError, setLoginError] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // 2000ms = 2 seconds
        useNativeDriver: true // Add this line
      }
    ).start();
  }, [fadeAnim]);

  const handleLogin = async (values) => {
    try {
      const userDataString = await AsyncStorage.getItem(values.email);
      const userData = userDataString ? JSON.parse(userDataString) : null;
      if (userData && userData.password === values.password) {
        navigation.navigate('Home');
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (e) {
      Alert.alert("Login Error", "An error occurred during login.");
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Let Us Connect</Animated.Text>
          <TextInput
            label="Email"
            mode="outlined"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
            error={touched.email && errors.email}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={styles.input}
            error={touched.password && errors.password}
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>Login</Button>
          {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}
          <Button
            mode="text"
            onPress={() => navigation.navigate('Register')}
            style={styles.linkButton}
          >
            Not a member? Register here
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Setting background to white
    padding: 20,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white', // Input background to white
    width: '100%', // Full width input fields
  },
  button: {
    marginTop: 10,
    backgroundColor: 'red', // Red button for actions
  },
  linkButton: {
    marginTop: 15,
    color: 'red', // Red text for the link
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'red', // Title text in red
  }
});

export default LoginScreen;
