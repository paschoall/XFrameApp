import React from 'react';
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp';
import Catalogo from '../pages/Catalogo';
import Catalogo2 from '../pages/Catalogo2';
import PageNotFound from '../pages/PageNotFound';
import Dashboard from '../pages/Dashboard';



const Rotas = ({ setToken }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/adminpage' element={<Dashboard />} />
        <Route path='/catalogo_variaveis_independentes' element={<Catalogo />} />
        <Route path='/catalogo_variaveis_dependentes' element={<Catalogo2 />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;

Routes.propTypes = {
  setToken: PropTypes.func.isRequired
};