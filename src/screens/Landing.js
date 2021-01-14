import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Landing;
