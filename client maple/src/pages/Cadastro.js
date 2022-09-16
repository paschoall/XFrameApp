import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

const theme = createTheme();

const Cadastro = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <main>
        <Formulario />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default Cadastro;