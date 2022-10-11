import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';


const CatalogoVi = () => {
  return (
    <>
      <CssBaseline />
      <CardBox fetchlink='/independent_variables' />
      <Footer />
    </>
  );
}

export default CatalogoVi;