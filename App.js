import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

import firebaseSetup from './src/firebase.config';
import useFirebaseAuth from './src/hooks/useFirebaseAuth';

import LandingScreen from './src/screens/Landing';
import RegisterScreen from './src/screens/Register';
import LoginScreen from './src/screens/Login';

const Stack = createStackNavigator();
firebaseSetup();

const App = () => {
  const [loaded, loggedIn] = useFirebaseAuth();

  if (!loaded)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Page loading...</Text>
      </View>
    );

  if (loggedIn)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User is already logged in</Text>
    </View>
  );
};

export default App;
