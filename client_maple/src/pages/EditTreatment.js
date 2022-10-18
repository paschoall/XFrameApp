import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditTreatment = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/treatment' />
      <Footer />
    </>
  );
}

export default EditTreatment;