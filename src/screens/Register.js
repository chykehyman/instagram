import React from 'react';
import { Button, View } from 'react-native';
import { auth } from 'firebase/app';

import FormInputField from '../components/FormInputField';
import { useForm } from '../hooks/useForm';

const Register = () => {
  const [formValues, handleTextInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleRegisterUser = () => {
    const { name, email, password } = formValues;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <FormInputField
        formKey="name"
        label="Name"
        placeholder="enter name here..."
        handleTextInputChange={handleTextInputChange}
      />
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
      <Button title="Sign Up" onPress={() => handleRegisterUser()} />
    </View>
  );
};

export default Register;
