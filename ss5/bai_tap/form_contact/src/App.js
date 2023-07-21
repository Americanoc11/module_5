import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Formik } from 'formik';
function App() {

  return (
    <>
      <div className="App">
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name'></input>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email'></input>
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input type='text' id='phone'></input>
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <input type='text' id='message'></input>
          </div>
          <div>
            <button type='button'>Create</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
