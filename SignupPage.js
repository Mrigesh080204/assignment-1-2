import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Add signup logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require('./background.jpg')} style={styles.background} />
      <View style={styles.logoContainer}>
        <Image source={require('./logo.jpg')} style={styles.logo} />
        <Text style={styles.companyName}>Esports Desk</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
        autoCompleteType="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
 <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
  <Text style={styles.signupButtonText}>Sign up</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.loginLink}>
  <Text style={styles.loginText}>Already have an account? Log in</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7', // light gray background
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    width: 250,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupButton: {
    backgroundColor: '#4CAF50', // green button
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  signupButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  loginLink: {
    padding: 10,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default SignupPage;