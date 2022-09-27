import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';


const Catalogo = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <CardBox fetchlink='/independent_variables' />
      <Footer />
    </div>
  );
}

export default Catalogo;