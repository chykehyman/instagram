import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInputField = ({
  placeholder,
  label,
  formKey,
  textInputProps,
  handleTextInputChange,
}) => (
  <View style={styles.formInputFieldWrapper}>
    <Text style={styles.labelText}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      style={styles.formFieldText}
      onChangeText={(value) => handleTextInputChange(formKey, value)}
      {...textInputProps}
    />
  </View>
);

const styles = StyleSheet.create({
  formInputFieldWrapper: {},
  formFieldText: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 1,
    padding: 12,
  },
  labelText: {
    fontSize: 20,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default FormInputField;
