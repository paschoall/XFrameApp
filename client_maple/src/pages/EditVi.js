import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditVi = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/independent_variables' />
      <Footer />
    </>
  );
}

export default EditVi;