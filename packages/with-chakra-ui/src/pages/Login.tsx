import { Box, Button, Center, Text, useToast } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthConext } from '../contexts';
import { Form, Formik } from 'formik';
import { InputField } from '../components/InputField';
import { JwtError } from 'use-jwt-manager/dist/constants/types';

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const history = useHistory();
  const toast = useToast();
  const authContext = useContext(AuthConext);
  const { authenticated } = authContext;

  React.useEffect(() => {
    console.info('authenticated changed to', authenticated);
    authenticated && history.push('/');
  }, [authenticated]);

  return (
    <Center>
      <Box spacing="1.5rem" width="100%" maxWidth="30rem" pt="8rem" px="1rem">
        <Text fontSize="2xl">Login</Text>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }, actions) => {
            authContext
              .login({ username, password })
              .then((res) => console.log(res))
              .catch((error: JwtError) => {
                toast({
                  position: 'top',
                  title: 'Error',
                  description: error.message,
                  status: 'error',
                  isClosable: true,
                });
                actions.setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="username" placeholder="username" label="username" />
              <InputField name="password" type="password" placeholder="password" label="password" />
              <Button colorScheme="teal" mt={4} isLoading={isSubmitting} type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Center>
  );
};
