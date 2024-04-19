import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const registrationValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});

const RegistrationScreen = ({ navigation }) => {
  const handleRegistration = async (values) => {
    try {
      // Save user data
      await AsyncStorage.setItem(values.email, JSON.stringify(values));
      Alert.alert("Registration Successful", "You can now login with your credentials.");
      navigation.navigate('Login');
    } catch (e) {
      Alert.alert("Registration Error", "Failed to save user data.");
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={registrationValidationSchema}
      onSubmit={handleRegistration}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
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
          <TextInput
            label="Confirm Password"
            mode="outlined"
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            style={styles.input}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
          <Button mode="contained" onPress={handleSubmit} style={styles.button}>Register</Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  }
});

export default RegistrationScreen;
