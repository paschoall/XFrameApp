import * as React from 'react';
import { useForm } from "react-hook-form";
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormInputText } from './FormInputText';

export default function Forms() {
  const { handleSubmit, reset, control } = useForm();

  const onSubmit = (data) => {
    data.level = 0
    data.stats = 0
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    fetch('/maple_character', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
    console.log(JSON.stringify(data));
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormInputText
            required
            name="name"
            control={control}
            label="Nome da Variável"
          />
        </Grid>
        <Grid item xs={12}>
          <FormInputText
            required
            name="job"
            control={control}
            label="Descrição"
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
          <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="checkbox caso seja necessária"
          />
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
    </React.Fragment>
  );
}