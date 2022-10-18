import * as React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

// import Typography from '@mui/material/Typography';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormInputText } from './FormInputText';
import AlertDialog from './AlertDialog';

export default function Forms(props) {
  const { handleSubmit, reset, control } = useForm();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  useEffect(() => {
    setOpenError(openError)
  }, [openError])

  useEffect(() => {
    setOpen(open)
  }, [open])

  const onSubmit = (data) => {
    setOpen(false)
    setOpenError(false)

    const proxy = 'https://5de3-2804-431-cfec-d6de-f8b2-c8c9-59cf-21e.sa.ngrok.io';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch(proxy+props.fetchlink, requestOptions)
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
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormInputText
            required
            name="name"
            control={control}
            label="Name"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            required
            multiline
            name="description"
            control={control}
            label="Description"
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormInputText
          name="Campo2"
          control={control}
          label="Campo 2"
        /> */}
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="checkbox caso seja necessária"
          /> */}
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
          Cadastrar
        </Button>
      </Box>
      <AlertDialog
        open={openError}
        title='Erro no Cadastro'
        message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
      <AlertDialog
        open={open}
        title='Variável Cadastrada com Sucesso'
        message='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      />
    </React.Fragment>
  );
}