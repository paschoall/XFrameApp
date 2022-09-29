import React from 'react';
import PropTypes from 'prop-types'
import {
  Routes,
  Route
} from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login'
import SignUp from '../pages/SignUp';
import Catalogo from '../pages/Catalogo';
import Catalogo2 from '../pages/Catalogo2';
import PageNotFound from '../pages/PageNotFound';
import Dashboard from '../pages/Dashboard';



const Rotas = ({ setToken, user }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/catalogo_variaveis_independentes' element={<Catalogo />} />
        <Route path='/catalogo_variaveis_dependentes' element={<Catalogo2 />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
        </Route>
        <Route
          path='/adminpage'
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('admin')}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Rotas;

Routes.propTypes = {
  setToken: PropTypes.func
};