import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';


const Catalogo2 = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <CardBox fetchlink='/dependent_variables' />
      <Footer />
    </div>
  );
}

export default Catalogo2;