import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';
import {
  Typography,
  Box, 
} from '@mui/material';

const EditVi = () => {
  const [haVariaveis, sethaVariaveis] = useState(true);

  useEffect(() => {
    fetch('/independent_variables')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length > 0) {
          sethaVariaveis(true);
        } else {
          sethaVariaveis(false);
        }
      })
      .catch((error) => {
        console.error('Erro ao verificar variáveis:', error);
      });
  }, []);
    return (
      <>
      <CssBaseline />
      <Box ml={3} mt={3}>
        {haVariaveis ? (
          <EditCardBox fetchlink='/independent_variable' />
        ) : (
          <Typography variant="h6" gutterBottom>
            Não há variáveis independentes cadastradas...
          </Typography>
        )}
      </Box>
      <Footer />
    </>
    );
}

export default EditVi;