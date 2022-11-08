import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormInputText } from './FormInputText';
import AlertDialog from './AlertDialog';


export default function Formulario(props) {
  const { handleSubmit, reset, control } = useForm();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setOpenError(openError)
  }, [openError])

  useEffect(() => {
    setOpen(open)
  }, [open])

  const onSubmit = (data) => {
    setOpen(false)
    setOpenError(false)

    
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    console.log(data)

    fetch(props.fetchlink+id, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        console.log(response)
        setOpen(true)
        reset()
        return response.json()
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        setOpenError(true)
      });

    // console.log(JSON.stringify(data));
  }

  return (
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
      <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component='h1' variant='h4' align='center' m={2}>
          {props.formTitle}
        </Typography>
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormInputText
                name="name"
                control={control}
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <FormInputText
                multiline
                name="description"
                control={control}
                label="Description"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              onClick={() => reset()}
              sx={{ mt: 3, ml: 1 }}
            >
              Resetar
            </Button>
            <Button
              variant='contained'
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 3, ml: 1 }}
            >
              Editar
            </Button>
          </Box>
          <AlertDialog
            open={openError}
            title='Erro no Update'
            message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          />
          <AlertDialog
            open={open}
            title='Variável Atualizada com Sucesso'
            message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          />
        </React.Fragment>
      </Paper>
    </Container>
  );
}