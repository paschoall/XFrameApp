import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import EditCardBox from '../components/EditCardBox';
import {
  Typography,
  Box,
} from '@mui/material';

const EditVd = () => {
  const [haVariaveis, sethaVariaveis] = useState(true);

  useEffect(() => {
    fetch('/dependent_variables')
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
          <EditCardBox fetchlink='/dependent_variable' />
        ) : (
          <Typography variant="h6" gutterBottom>
            There are no dependent variables registered...
          </Typography>
        )}
      </Box>
      <Footer />
    </>
    );
}

export default EditVd;