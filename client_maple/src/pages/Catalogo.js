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
      <CardBox fetchlink='/maple_characters' />
      <Footer />
    </div>
  );
}

export default Catalogo;