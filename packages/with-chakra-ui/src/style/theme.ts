import { extendTheme } from '@chakra-ui/react';

export const overrides = extendTheme({
  styles: {
    global: (props: any) => {
      const dark = props.colorMode === 'dark';
      return {
        body: {
          bg: dark ? 'gray.800' : '#f1f2f5',
        },
        '.logo': {
          filter: dark ? 'invert(100%)' : 'none',
        },
        '.d-gray': {
          bg: dark ? '#272c34' : 'white',
        },
      };
    },
  },
});
