import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';
import {
  Typography,
  Box,
} from '@mui/material';

const CatalogoVi = () => {
  const [haVariaveis, sethaVariaveis] = useState(true);

  useEffect(() => {
    fetch('/independent_variables')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
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
          <CardBox fetchlink='/independent_variables' />
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

export default CatalogoVi;
