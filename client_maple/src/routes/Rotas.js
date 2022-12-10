import React from 'react';
import PropTypes from 'prop-types'
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

import AdminPage from '../pages/AdminPage';
import CatalogoVi from '../pages/ViCatalog';
import CatalogoVd from '../pages/VdCatalog';
import EditVi from '../pages/EditVi';
import EditVd from '../pages/EditVd';
import EditMetric from '../pages/EditMetric';
import EditInstrument from '../pages/EditInstrument';
// import EditFactor from '../pages/EditFactor';
import EditTreatment from '../pages/EditTreatment';
import EditVariavelIndependente from '../pages/EditVariavelIndependente';
import EditVariavelDependente from '../pages/EditVariavelDependente';
import EditMetrica from '../pages/EditMetrica';
import EditInstrumento from '../pages/EditInstrumento';
// import EditFator from '../pages/EditFator';
import EditTratamento from '../pages/EditTratamento';
import EditRelationship from '../pages/EditRelationship';
import Home from '../pages/Home';
import Login from '../pages/Login'
import ManageData from '../pages/ManageData';
import ManageDependentVariables from '../pages/ManageDependentVariables';
import ManageIndependentVariables from '../pages/ManageIndependentVariables';
import ManageUsers from '../pages/ManageUsers';
import ManageVariables from '../pages/ManageVariables';
import ManageMetrics from '../pages/ManageMetrics';
import ManageInstruments from '../pages/ManageInstruments';
import ManageMetricsInstruments from '../pages/ManageMetricsInstruments';
// import ManageFactors from '../pages/ManageFactors';
import ManageTreatments from '../pages/ManageTreatments';
import ManageFactorsTreatments from '../pages/ManageFactorsTreatments';
import ManageRelationships from '../pages/ManageRelationships';
import PageNotFound from '../pages/PageNotFound';
import RegisterVi from '../pages/RegisterVi';
import RegisterVd from '../pages/RegisterVd';
import RegisterMetric from '../pages/RegisterMetric';
import RegisterInstrument from '../pages/RegisterInstrument';
// import RegisterFactor from '../pages/RegisterFactor';
import RegisterTreatment from '../pages/RegisterTreatment';
import RegisterRelationship from '../pages/RegisterRelationship';
import SignUp from '../pages/SignUp';
import VariavelIndependente from '../pages/VariavelIndependente';
import VariavelDependente from '../pages/VariavelDependente';

const Rotas = ({ setToken, user }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login setToken={setToken} />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='catalogo-variaveis-independentes' element={<CatalogoVi />} />
        <Route path='catalogo-variaveis-independentes/:id' element={<VariavelIndependente />} />
        <Route path='catalogo-variaveis-dependentes' element={<CatalogoVd />} />
        <Route path='catalogo-variaveis-dependentes/:id' element={<VariavelDependente />} />
        <Route path='admin-page-dev' element={<AdminPage />} >
          <Route path='gerenciar-dados' element={<ManageData />} />
          <Route path=':gerenciar-usuarios' element={<ManageUsers />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
        </Route>
        <Route
          path='/admin-page'
          element={
            <ProtectedRoute
              isAllowed={!!user.roles ? user.roles.includes('admin') : false}
            >
              <AdminPage />
            </ProtectedRoute>
          }
        >
          <Route path='gerenciar-dados' element={<ManageData />} />
          <Route path='gerenciar-usuarios' element={<ManageUsers />} />
          <Route path='gerenciar-variaveis' element={<ManageVariables />} />
          <Route path='gerenciar-metricas-instrumentos' element={<ManageMetricsInstruments />} />
          <Route path='gerenciar-fatores-tratamentos' element={<ManageFactorsTreatments />} />


          <Route path='gerenciar-variaveis/independentes' element={<ManageIndependentVariables />} />
          <Route path='gerenciar-variaveis/independentes/cadastrar' element={<RegisterVi />} />
          <Route path='gerenciar-variaveis/independentes/editar' element={<EditVi />} />
          <Route path='gerenciar-variaveis/independentes/editar/:id' element={<EditVariavelIndependente />} />

          <Route path='gerenciar-variaveis/dependentes' element={<ManageDependentVariables />} />
          <Route path='gerenciar-variaveis/dependentes/cadastrar' element={<RegisterVd />} />
          <Route path='gerenciar-variaveis/dependentes/editar' element={<EditVd />} />
          <Route path='gerenciar-variaveis/dependentes/editar/:id' element={<EditVariavelDependente />} />
          
          <Route path='gerenciar-metricas-instrumentos/metricas' element={<ManageMetrics />} />
          <Route path='gerenciar-metricas-instrumentos/metricas/cadastrar' element={<RegisterMetric />} />
          <Route path='gerenciar-metricas-instrumentos/metricas/editar' element={<EditMetric />} />
          <Route path='gerenciar-metricas-instrumentos/metricas/editar/:id' element={<EditMetrica />} />

          <Route path='gerenciar-metricas-instrumentos/instrumentos' element={<ManageInstruments />} />
          <Route path='gerenciar-metricas-instrumentos/instrumentos/cadastrar' element={<RegisterInstrument />} />
          <Route path='gerenciar-metricas-instrumentos/instrumentos/editar' element={<EditInstrument />} />
          <Route path='gerenciar-metricas-instrumentos/instrumentos/editar/:id' element={<EditInstrumento />} />
          
          <Route path='gerenciar-tratamentos/tratamentos' element={<ManageTreatments />} />
          <Route path='gerenciar-tratamentos/tratamentos/cadastrar' element={<RegisterTreatment />} />
          <Route path='gerenciar-tratamentos/tratamentos/editar' element={<EditTreatment />} />
          <Route path='gerenciar-tratamentos/tratamentos/editar/:id' element={<EditTratamento />} />

          <Route path='gerenciar-variaveis/relacoes' element={<ManageRelationships />} />
          <Route path='gerenciar-variaveis/relacoes/cadastrar' element={<RegisterRelationship />} />
          <Route path='gerenciar-variaveis/relacoes/deletar' element={<EditRelationship />} />
          
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default Rotas;

Routes.propTypes = {
  setToken: PropTypes.func
};