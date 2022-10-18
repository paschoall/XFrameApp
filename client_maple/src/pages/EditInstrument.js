import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditInstrument = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/instrument' />
      <Footer />
    </>
  );
}

export default EditInstrument;