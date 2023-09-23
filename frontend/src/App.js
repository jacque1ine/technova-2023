import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { css } from '@emotion/core';
import MyCard from './components/MyCard';
import Tester from './components/Tester';

function App() {
  return (
    <BrowserRouter>
      <Box
        css={css`
          min-height: 100vh;
        `}
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          p={5}
          bg="teal.500"
          color="white"
        >
          <Text fontSize="xl">My Website</Text>
          <Box>
            <Link to="/" color="white">
              Home
            </Link>
            <Link to="/about" color="white" ml={2}>
              About
            </Link>
            <Link to="/contact" color="white" ml={2}>
              Contact
            </Link>
          </Box>
        </Flex>
        <Route exact path="/" component={Tester} />
        <Route path="/about" component={MyCard} />
      </Box>
    </BrowserRouter>
  );
}
