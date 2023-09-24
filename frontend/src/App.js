import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';

import '@fontsource/inter/700.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
  },
});
