import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormInputText } from './FormInputText';
import AlertDialog from './AlertDialog';

export default function Forms(props) {
  const { handleSubmit, reset, control } = useForm();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorText, setErrorText] = useState('Falha no registro');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setOpen(false);
    setOpenError(false);
  
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  
    fetch(props.fetchlink, requestOptions)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 409) {
            setErrorText(props.tipo + ' já existente');
            throw new Error('409');
          }
          throw new Error('Network response was not OK');
        } else {
          setOpen(true);
          reset();
          setShowAlert(true);
          setTimeout(() => {
            navigate(-1)
          }, 1500);
        }
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setOpenError(true);
      });
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormInputText
            required
            name="name"
            control={control}
            label="Nome"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            multiline
            name="description"
            control={control}
            label="Descrição"
            defaultV=""
          />
        </Grid>
        {/* Outros campos do formulário, se houver */}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/*<Button
          variant='contained'
          onClick={() => reset()}
          sx={{ mt: 3, ml: 1 }}
        >
          Limpar
        </Button>*/}
        <Button
          variant='contained'
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, ml: 1 }}
        >
          Cadastrar
        </Button>
      </Box>
      {showAlert && (
        <AlertDialog
          open={open}
          title='Adicionado com Sucesso'
          message='Registro bem sucedido!'
        />
      )}
      <AlertDialog
        open={openError}
        title='Erro no Cadastro'
        message={errorText}
      />
    </React.Fragment>
  );
}
