import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import Home from './pages/Home';

const App = () => {
  return (
    <NextUIProvider>
      <Home />
    </NextUIProvider>
  );
};

export default App;
