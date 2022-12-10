import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Footer from '../components/Footer';
import Forms from '../components/Forms'


const RegisterVi = () => {
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center' m={2}>
            Add Independent Variable
          </Typography>
          <React.Fragment>
            <Forms fetchlink='/independent_variable' />
          </React.Fragment>
        </Paper>
      </Container>
      <Footer />
    </>
  );
}

export default RegisterVi;