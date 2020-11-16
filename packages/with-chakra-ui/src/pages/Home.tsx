import { Box, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthConext } from '../contexts';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  const authContext = useContext(AuthConext);
  return (
    <VStack pt="130px">
      <Box maxW="50%" p="40px" rounded="md" shadow="md" border="1px dashed" mb="30px">
        {JSON.stringify(authContext)}
      </Box>
    </VStack>
  );
};
