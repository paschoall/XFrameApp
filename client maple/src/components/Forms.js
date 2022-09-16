import * as React from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Forms() {
  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Cadastro de Variável
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="nomeVariavel"
            name="nomeVariavel"
            label="Nome da Variável"
            fullWidth
            autoComplete="nome-varoavel"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="campo1"
            name="campo1"
            label="Campo 1"
            fullWidth
            autoComplete="descricao campo1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="campo2"
            name="campo2"
            label="Campo 2 (se necessário)"
            fullWidth
            autoComplete="campo2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
            label="checkbox caso seja necessária"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}