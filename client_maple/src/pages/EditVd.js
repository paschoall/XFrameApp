import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';


const EditVd = () => {
  return (
    <>
      <CssBaseline />
      <EditCardBox fetchlink='/dependent_variable' />
      <Footer />
    </>
  );
}

export default EditVd;