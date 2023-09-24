import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Button, ButtonGroup } from '@chakra-ui/react';
import MyCard from './components/MyCard';
//import CreateProfile from './components/CreateProfile';

import '@fontsource/inter/700.css'
//import ViewChallenges from './components/ViewChallenges';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      </Box>
    </ChakraProvider>
  );
}

export default App;

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
  },
})


