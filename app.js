import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const [currentView, setCurrentView] = useState('welcome');

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {currentView === 'welcome' && (
        <WelcomePage
          onLoginPress={() => setCurrentView('login')}
          onSignupPress={() => setCurrentView('signup')}
        />
      )}
      {currentView === 'login' && (
        <LoginPage
          onSignupPress={() => setCurrentView('signup')}
          onWelcomePress={() => setCurrentView('welcome')}
        />
      )}
      {currentView === 'signup' && (
        <SignupPage
          onLoginPress={() => setCurrentView('login')}
          onWelcomePress={() => setCurrentView('welcome')}
        />
      )}
    </View>
  );
};

export default App;