// src/App.js
import ReactDOM from 'react-dom/client';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import HookForm from './HookForm';
import { ChakraProvider, Box } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        hello
        <HookForm />
      </Box>
    </ChakraProvider>
  );
}
