import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return <IconButton aria-label="switch mode" onClick={toggleColorMode} icon={isDark ? <SunIcon /> : <MoonIcon />}></IconButton>;
};
