import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';

const theme = createTheme();



const Catalogo = () => {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <CardBox fetchlink = '/maple_characters'/>
      <Footer />
    </ThemeProvider>
  );
}

export default Catalogo;