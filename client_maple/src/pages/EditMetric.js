import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditMetric = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/metric' />
      <Footer />
    </>
  );
}

export default EditMetric;