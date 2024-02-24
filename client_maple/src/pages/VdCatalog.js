import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';
import {
  Typography,
  Box,
} from '@mui/material';

const CatalogoVd = () => {
  const [haVariaveisDependentes, setHaVariaveisDependentes] = useState(true);

  useEffect(() => {
    fetch('/dependent_variables')
      .then((response) => response.json())
      .then((data) => {
        console.log('Resposta da requisição /dependent_variables:', data);

        if (data && data.data && data.data.length > 0) {
          setHaVariaveisDependentes(true);
        } else {
          setHaVariaveisDependentes(false);
        }
      })
      .catch((error) => {
        console.error('Erro ao verificar variáveis dependentes:', error);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Box ml={3} mt={3}>
        {haVariaveisDependentes ? (
          <CardBox fetchlink='/dependent_variables' />
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

export default CatalogoVd;
