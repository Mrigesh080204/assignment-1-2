import React from 'eact';
import { View, Image, Text, StyleSheet } from 'eact-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./background.png')} style={styles.background} />
      <Image source={require('./logo.jpg')} style={styles.logo} />
      <Text style={styles.companyName}>Esports Desk</Text>
      <Text style={styles.tagline}>Gamers on same desk.</Text>
      <Text style={styles.welcomeMessage}>Welcome to Esports Desk, Eat,Sleep,Play</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  welcomeMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default WelcomePage;