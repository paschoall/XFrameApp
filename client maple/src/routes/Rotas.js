import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Catalogo from '../pages/Catalogo';
import Catalogo2 from '../pages/Catalogo2';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/catalogo_variaveis_dependentes' element={<Catalogo />} />
        <Route path='/catalogo_variaveis_independentes' element={<Catalogo2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;