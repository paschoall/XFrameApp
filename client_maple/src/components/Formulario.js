import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Forms from '../components/Forms';


const theme = createTheme();

export default function Formulario() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center' m={2}>
            Cadastro de Variável
          </Typography>
          <React.Fragment>
            <Forms />
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}