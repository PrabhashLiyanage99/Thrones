import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from 'react';

import { NavigationProp } from '@react-navigation/native';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thrones</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button title="Sign In" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 5
  },
  input: {
    width: "100%",
    height: 64,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#3D3D3D',
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    color: '#FFD482'
  },
  label: {
    color: '#C0C0C0',
    marginTop: 22
  }
});

export default LoginScreen;