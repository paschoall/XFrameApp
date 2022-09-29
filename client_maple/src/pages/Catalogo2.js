import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';


const Catalogo2 = () => {
  return (
    <>
      <CssBaseline />
      <CardBox fetchlink='/dependent_variables' />
      <Footer />
    </>
  );
}

export default Catalogo2;