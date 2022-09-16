import './assets/App.css';
// import { useState, useEffect } from 'react'
import React from 'react'
import Rotas from './routes/Rotas'

function App() {
  // const [data, setData] = useState([{}])
  // useEffect(() => {
  //   fetch('/maple_characters').then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       // console.log(data)
  //     }
  //   )
  // }, [])
  return (
    <div className='App'>
      <Rotas />
    </div>
  );
}

export default App;
