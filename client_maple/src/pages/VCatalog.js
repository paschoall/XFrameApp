import React from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Box,
  Grid,
  Paper,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material'
import Footer from '../components/Footer';


const CatalogoVd = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [indexArray, setIndexArray] = useState([]);

  const handleListItemClick = (event, index, array) => {
    setSelectedIndex(index);
    setIndexArray(array)
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Toolbar />
        <Grid container spacing={0.5}>
          <Grid item xs={0.75} md={0.75} lg={0.75} />
          <Grid item xs={5} md={5} lg={5}>
            <Paper square
              variant='outlined'
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
            >
              <Typography gutterBottom
                sx={{
                  marginTop: '1vh',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
              >
                Independent variables
              </Typography>
              <Paper square
                variant='outlined'
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0, [1])}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  Variable A
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1, [0, 2])}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  Variable B
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2, [2, 3])}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  Variable C
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3, [3])}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  Variable D
                </ListItemButton>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={0.5} md={0.5} lg={0.5} />
          <Grid item xs={5} md={5} lg={5}>
            <Paper square
              variant='outlined'
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                alignContent: 'center',
                padding: '0',
              }}
            >
              <Typography gutterBottom
                sx={{
                  marginTop: '1vh',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
              >
                Dependent Variables
              </Typography>
              <Paper square
                variant='outlined'
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  alignContent: 'center',
                  padding: '0',
                }}
              >
                <ListItemButton
                  selected={indexArray.includes(0)}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  VD A
                </ListItemButton>
                <ListItemButton
                  selected={indexArray.includes(1)}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  VD B
                </ListItemButton>
                <ListItemButton
                  selected={indexArray.includes(2)}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  VD C
                </ListItemButton>
                <ListItemButton
                  selected={indexArray.includes(3)}
                  sx={{
                    width: '100%',
                    height: '3rem',
                    padding: '1vh',
                  }}
                >
                  VD D
                </ListItemButton>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default CatalogoVd;