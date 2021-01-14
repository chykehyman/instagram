import React from 'react';
import { Button, View } from 'react-native';
import { auth } from 'firebase/app';

import FormInputField from '../components/FormInputField';
import { useForm } from '../hooks/useForm';

const Login = () => {
  const [formValues, handleTextInputChange] = useForm({
    email: '',
    password: '',
  });

  const handleSignInUser = () => {
    const { email, password } = formValues;
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <FormInputField
        formKey="email"
        label="Email"
        placeholder="enter email here..."
        handleTextInputChange={handleTextInputChange}
      />
      <FormInputField
        formKey="password"
        label="Password"
        placeholder="enter password here..."
        handleTextInputChange={handleTextInputChange}
        textInputProps={{
          secureTextEntry: true,
        }}
      />
      <Button title="Sign In" onPress={() => handleSignInUser()} />
    </View>
  );
};

export default Login;
