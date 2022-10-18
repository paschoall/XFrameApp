import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditForms from '../components/EditForms';


const EditViForms = () => {
  return (
    <>
      <CssBaseline />
      <EditForms formTitle={'Editar Variável Independente'} fetchlink='/independent_variable/' />
      <Footer />
    </>
  );
}

export default EditViForms;