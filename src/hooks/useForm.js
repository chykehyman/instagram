import { useState } from 'react';

export const useForm = (values) => {
  const [formValues, setFormValues] = useState({
    ...values,
  });

  const handleTextInputChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };

  return [formValues, handleTextInputChange];
};
