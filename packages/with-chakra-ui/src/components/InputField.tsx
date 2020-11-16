import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
import { useField } from 'formik';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & { name: string; label: string };

export const InputField: React.FC<InputFieldProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error} mt="10px">
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input {...field} id={field.name} {...props} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
