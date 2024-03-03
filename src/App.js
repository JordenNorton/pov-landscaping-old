import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize the styling */}
        {/*<Navbar />*/}
        <HeroSection />
        <About />
        <Services />
        {/* Add more sections as needed */}
      </ThemeProvider>
  );
}

export default App;
