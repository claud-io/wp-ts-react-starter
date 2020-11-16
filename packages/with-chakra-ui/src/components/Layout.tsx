import { Box, Button, HStack, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthConext } from '../contexts';
import { DarkModeSwitch } from './DarkModeSwitch';
import { Loader } from './Loader';

export const Layout: React.FC = ({ children }) => {
  const { authenticated, initialized, logout } = useContext(AuthConext);

  return (
    <Box w="100%" h="100%">
      <HStack spacing="24px" className="header elevation d-gray">
        <Image htmlWidth="300px" fit="scale-down" className="logo" />
        <HStack>
          <DarkModeSwitch />
          {authenticated && <Button onClick={logout}>Log out</Button>}
        </HStack>
      </HStack>

      {!initialized ? <Loader /> : children}
    </Box>
  );
};
