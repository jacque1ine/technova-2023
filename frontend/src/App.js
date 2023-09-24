import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import CreateProfile from './components/CreateProfile';
import MatchedSection from './components/MatchedSection';
import ViewChallenge from './components/ViewChallenge';
import ViewChallenges from './components/ViewChallenges';

import '@fontsource/inter/700.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={null} />
          <Route path='/create-profile' element={<CreateProfile />} />
          <Route path='/match/*' element={<MatchedSection />} />
          <Route path='/challenge/*' element={<ViewChallenge />} />
          <Route path='/challenges/*' element={<ViewChallenges />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
  },
});
