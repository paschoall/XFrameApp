import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import Forms from '../components/Forms'


const RegisterVd = () => {
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center' m={2}>
            Adicionar Variável Dependente
          </Typography>
          <React.Fragment>
            <Forms fetchlink='/dependent_variable' tipo='Variável'/>
          </React.Fragment>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default RegisterVd;