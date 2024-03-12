import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Collapse,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../components/Footer';
import AlertDialog from '../components/AlertDialog';


const EditRelationship = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [indexArray, setIndexArray] = useState([]);
  const [vi, setVi] = useState([{}])
  const [vd, setVd] = useState([{}])
  const [vi_vd, setVivd] = useState([{}])
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const navigate = useNavigate();



  const handleViListItemClick = (event, index) => {
    setSelectedDesign(index)
    setIndexArray([])
  };

  const handleListItemClick = (event, index, array) => {
    setSelectedIndex(index);
    setIndexArray(array)
  };

  const handleClick = () => {
    if (open === true) {
      setOpen(!open);
      setOpenWarning(!openWarning);
    }
    if (!!!selectedDesign) {
      setOpenWarning(!openWarning);
    }
    else {
      setOpen(!open);
    }
  }

  useEffect(() => {
    setOpenError(openError);
  }, [openError])

  useEffect(() => {
    setOpen(open);
  }, [open])

  useEffect(() => {
    fetch('/independent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVi(data);
      }
    )
  }, [])

  useEffect(() => {
    fetch('/dependent_variables').then(
      res => res.json()
    ).then(
      data => {
        setVd(data);
      }
    )
  }, [])

  // const location = useLocation()
  useEffect(() => {
    fetch('/vi_vd_relationships').then(
      res => res.json()
    ).then(
      data => {
        setVivd(data);
      }
    )
  }, [])

  const handleCloseDelete = (deleteFlag) => {
    if (deleteFlag) {
      const requestOptions = {
        method: 'DELETE',
      }

      fetch('/vi_vd_relationship/' + selectedIndex, requestOptions).then(
        response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json()
        }).then(
          data => {
            navigate(0)
          }
        ).catch(
          (error) => {
            console.error('There has been a problem with your delete operation:', error);
            setOpenError(true)
          }
        )

    }
    setOpen(false);
    setOpenWarning(false);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenWarning(false);
  }

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
                  fontSize: { xs: '1rem', md: '1.5rem' },
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


                {
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vi.data === 'undefined') ? (
                    <p>Loading...</p>
                  ) : (
                    vi.data.map((data, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            width: '100%',

                            padding: '0',
                          }}
                        >
                          <ListItemButton
                            selected={selectedDesign === data['id']}
                            onClick={
                              (event) => handleViListItemClick(
                                event,
                                data['id']
                              )
                            }
                            sx={{
                              width: '100%',
                              minHeight: '3rem',
                              padding: '1vh',
                            }}
                          >
                            <ListItemText primary={data['name']} />
                            {selectedDesign === data['id'] ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={selectedDesign === data['id']} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {vi_vd.data.filter(({ id_vi }) => id_vi === data['id']).map((data, i) => {
                                return (
                                  <ListItemButton
                                    key={i}
                                    selected={selectedIndex === data['id']}
                                    onClick={
                                      (event) => handleListItemClick(
                                        event,
                                        data['id'],
                                        data['id_vd_array'].split(',').map((item) => { return parseInt(item) })
                                      )
                                    }
                                    sx={{
                                      width: '100%',
                                      minHeight: '3rem',
                                      padding: '1vh',
                                      paddingLeft: '2vh',
                                    }}
                                  >
                                    {'Relacionamento'} {i + 1}
                                  </ListItemButton>
                                )
                              })}
                            </List>
                          </Collapse>
                        </Box>
                      )
                    }
                    )
                  )
                }
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
                  fontSize: { xs: '1rem', md: '1.5rem' },
                  textAlign: 'center',
                }}
              >
                Dependent variables
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

                {
                  (typeof vi_vd.data === 'undefined' || Object.keys(vi_vd.data).length === 0 || typeof vd.data === 'undefined') ? (
                    <p>Loading...</p>
                  ) : (
                    vd.data.map((data, i) => {
                      return (
                        <ListItemButton
                          key={i}
                          selected={indexArray.includes(data['id'])}
                          sx={{
                            width: '100%',
                            minHeight: '3rem',
                            padding: '1vh',
                          }}
                        >
                          <ListItemText primary={data['name']} />
                        </ListItemButton>
                      )
                    }
                    )
                  )
                }
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={6.25} md={6.25} lg={6.25} />
          <Grid item
            xs={5} md={5} lg={5}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                marginTop: '2rem'
              }}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          DELETE
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDelete(true)} autoFocus>
            Delete
          </Button>
          <Button onClick={() => handleCloseDelete()} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        open={openError}
        title='Error when deleting'
      />
      <Dialog
        open={openWarning}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Select Design
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDelete()} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </>
  );
}

export default EditRelationship;