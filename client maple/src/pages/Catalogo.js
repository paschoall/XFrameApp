import React from 'react';
import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardBox from '../components/CardBox';

const theme = createTheme();



const Catalogo = () => {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch('/maple_characters').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        // console.log(data)
      }
    )
  }, [])

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      {/* {(typeof data.characters === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.characters.map((character, i) => (
            <p key={i}>{character['name']}</p>
          ))
      )}
      {(typeof data.characters === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <CardBox commonProps = {data.characters}/>
      )} */}
      <CardBox commonProps = {data.characters}/>

      <Footer />
    </ThemeProvider>
  );
}

export default Catalogo;