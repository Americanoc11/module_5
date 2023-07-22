import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'



const REGEX = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().matches(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    "Email must not be in the correct format. Ex:example@gmail.com"
  ),
  phone: yup.string().required(),
  message: yup.string().required()
})
function App() {
  const [form, setForm] = useState({
    // name: "",
    // email: "",
    // phone: "",
    // message: ""
  });
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit() {
    debugger;
    alert("Create Success!")
    console.log(form);

  }
  function handleValidate() {
    try {
      REGEX.validateSync(form, { abortEarly: false });
      return {}
    } catch (errors) {
      const validationErrors = {};
      errors.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      return validationErrors;
    }

  }

  return (
    <>
      <div className="App">
        <h2>Contact Form</h2>
        <Formik
          intialForm={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <Field type='text' id='name' name='name' onChange={handleChange} value={form.name}></Field>
              <ErrorMessage name='name' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <Field type='text' id='email' name='email' onChange={handleChange} value={form.email}></Field>
              <ErrorMessage name='email' component="div" className='text-red'  />

            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <Field type='text' id='phone' name='phone' onChange={handleChange} value={form.phone}></Field>
              <ErrorMessage name='phone' component="div" className='text-red'  />

            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <Field type='text' id='message' name='message' onChange={handleChange} value={form.message}></Field>
              <ErrorMessage name='message' component="div" className='text-red' />
            </div>
            <div>
              <button type='submit' >Create</button>
            </div>
          </Form>
        </Formik>

      </div>
    </>
  );
}

export default App;
