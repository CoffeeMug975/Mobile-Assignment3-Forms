import React from 'react';
// Cleaned up import section & default function -- Dan
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function SignIn({ navigation }: any) {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        // Updated to show a prompt on where the data is --Dan
        onSubmit={(values) => {
          console.log('Sign-In data:', values);
          Alert.alert("user Data collected. Check terminal for details")
          // You can navigate or show success here
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {/* Changed button to TouchableOpacity --Dan  */}
            <TouchableOpacity onPress={()=>handleSubmit()}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
