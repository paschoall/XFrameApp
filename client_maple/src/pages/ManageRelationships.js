import * as React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ListAltIcon from '@mui/icons-material/ListAlt';

import Footer from '../components/Footer';

const ManageRelationships = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          overflow: 'auto',
          paddingTop: { xs: 'none', md: 'none' },
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 0, mb: 4, }} >
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={12} >
              <Typography variant="h3" gutterBottom
                sx={{
                  mt:5,
                }}
              >
                Gerenciar relações causais
              </Typography>
            </Grid>
            <Grid item xs={0} md={2} lg={2} />
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '44vh',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  component={Link}
                  to='cadastrar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ListAltIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Adicionar relacionamento
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '44vh',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  component={Link}
                  to='deletar'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '1vh',
                  }}
                >
                  <ListItemIcon>
                    <ListAltIcon
                      sx={{
                        fontSize: '24vh',
                        textAlign: 'center',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        type="body2"
                        sx={{
                          marginTop: '2vh',
                          fontSize: '3.6vh',
                          textAlign: 'center',
                        }}
                      >
                        Deletar relacionamento
                      </Typography>}
                  />
                </ListItemButton>
              </Paper>
            </Grid>
            <Grid item md={2} lg={2} />
            <Grid item xs={12} md={12} lg={12} >
              <Footer />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ManageRelationships;
