// src/App.js
import ReactDOM from 'react-dom/client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import MyCard from './components/MyCard';
import Tester from './components/Tester';

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={MyCard} />
          <Route path="/about" component={Tester} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
