import HomePage from './pages/HomePage';
import ApplicationForm from './pages/ApplicationFormPage';
import CreateTrip from './pages/CreateTripPage';
import TripDetails from './pages/TripDetailsPage';
import AdminHome from './pages/AdminHomePage';
import ListTrips from './pages/ListTripsPage';
import Login from './pages/LoginPage';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import {BrowserRouter,  Routes, Route } from 'react-router-dom'
 
// Estilos definidos aqui serão aplicados a toda a aplicação
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100wv;
  }
`

const MainContainer = styled.div`
  background-color: #F2E0C9;

  color: #025959;
`

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="trips/list" element={<ListTrips />} />
        <Route path="trips/application" element={<ApplicationForm />} />
        <Route path="admin/trips/list" element={<AdminHome />} />
        <Route path="admin/trips/create" element={<CreateTrip />} />
        <Route path="admin/trips/:id" element={<TripDetails />} />
      </Routes>
    </BrowserRouter>
 
    
  );
}

export default App;
