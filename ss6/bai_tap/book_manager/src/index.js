import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Library } from "./components/Library";
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from "react-router";
import { CreatBook } from "./components/Create";
import { Edit } from './components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/create' element={<CreatBook />} />
        <Route path='/update/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
