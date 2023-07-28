import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import './Style1.css';
import './Customer.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ContractList from './components/contract/ContractList';
import NewContract from './components/contract/NewContract';
import Section from './components/common/Section';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

import CustomerList from './components/customer/CustomerList';
import CreateCustomer from './components/customer/CreateCustomer';
import EditCustomer from './components/customer/EditCustomer';

import ServiceList from './components/service/Service';
import EditService from './components/service/EditService';
import CreateService from './components/service/CreateService';

import HouseList from './components/service/house/HouseList';
import VillaList from './components/service/villa/VillaList';
import RoomList from './components/service/room/RoomList';
import CreateHouse from './components/service/house/CreateHouse';
import CreateVilla from './components/service/villa/CreateVilla';
import CreateRoom from './components/service/room/CreateRoom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/contracts/list' element={<ContractList />} />
        <Route path='/contracts/create' element={<NewContract />} />


        <Route path='/customers/list' element={<CustomerList />} />
        <Route path='/customers/create' element={<CreateCustomer />} />
        <Route path='/customers/edit' element={<EditCustomer />} />

        <Route path='/services/list' element={<ServiceList />} />
        <Route path='/services/create' element={<CreateService />} />
        <Route path='/services/edit' element={<EditService />} />
        <Route path='/services/houses' element={<HouseList />} />
        <Route path='/services/houses/create' element={<CreateHouse />} />

        <Route path='/services/villas' element={<VillaList />} />
        <Route path='/services/villas/create' element={<CreateVilla />} />

        <Route path='/services/rooms' element={<RoomList />} />
        <Route path='/services/rooms/create' element={<CreateRoom />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
