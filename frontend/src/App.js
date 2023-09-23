import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Button, ButtonGroup } from '@chakra-ui/react';
import MyCard from './components/MyCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>HELLO HELLO</Text>
        <Button colorScheme="blue">Button</Button>
        <MyCard />
      </Box>
    </ChakraProvider>
  );
}

export default App;
