import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditFactor = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/factor' />
      <Footer />
    </>
  );
}

export default EditFactor;