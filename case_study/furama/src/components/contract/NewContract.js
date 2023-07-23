import React, { useState } from "react"
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function NewContract() {
  const [form, setForm] = useState({
    idContract: "",
    dayStart: "",
    dayEnd: "",
    nameCustomer: "",
    deposit: "",
    totalPrice: "",
  });
  const typeService = [
    { label: "Hour", value: "Hour" },
    { label: "Day", value: "Day" },
    { label: "Month", value: "Month" },
    { label: "Year", value: "Year" }
  ]
  const REGEX = yup.object().shape({
    idContract: yup.string().required("Identity Contract is a required field"),
    dayStart: yup.string().required(),
    dayEnd: yup.string().required(),
    nameCustomer: yup.string().required(),
    deposit: yup.string().required(),
    totalPrice: yup.string().required(),
  })
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault(); // non reload
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
      <div id="contractCss">
        <Formik
          intialForm={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          <section className="vh-100" style={{}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                  <div className="card" style={{ borderRadius: "1rem" }}>
                    <div className="row g-0">
                      <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="..\images\property-2.jpg"
                          alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }} />
                      </div>
                      <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                          <Form onSubmit={handleSubmit}>
                            <h3>Form Contract Furama </h3>

                            <div className="user">
                              <div className="row">
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="idContract" style={{ fontWeight: "bold" }}>Identity Contract<span
                                      className="spanRed">(*)</span>:</label>
                                    <Field id="idContract" type="text" name="idContract" value={form.idContract} onChange={handleChange} />
                                    <ErrorMessage name='idContract' component="div" className='text-red' />

                                  </div>
                                </div>
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="dayStart" style={{ fontWeight: "bold" }}>Day Start<span
                                      className="spanRed">(*)</span></label>
                                    <Field id="dayStart" type="date" name="dayStart" value={form.dayStart} onChange={handleChange} />
                                    <ErrorMessage name='dayStart' component="div" className='text-red' />

                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="nameCustomer" style={{ fontWeight: "bold" }}>Name Customer<span
                                      className="spanRed">(*)</span>:</label>
                                    <Field id="nameCustomer" type="text" name="nameCustomer" value={form.nameCustomer} onChange={handleChange} />
                                    <ErrorMessage name='nameCustomer' component="div" className='text-red' />

                                  </div>
                                </div>
                                <div className="col-6">

                                  <div>
                                    <label htmlFor="dayEnd" style={{ fontWeight: "bold" }}>Day End<span
                                      className="spanRed">(*)</span></label>
                                    <Field id="dayEnd" type="date" name="dayEnd" value={form.dayEnd} onChange={handleChange} />
                                    <ErrorMessage name='dayEnd' component="div" className='text-red' />

                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="deposit" style={{ fontWeight: "bold" }}>Deposit<span
                                      className="pool">(*)</span></label>
                                    <Field id="deposit" type="text" name="deposit" value={form.deposit} onChange={handleChange} />
                                    <ErrorMessage name='deposit' component="div" className='text-red' />

                                  </div>
                                </div>
                                <div className="col-6">
                                  <div>
                                    <label htmlFor="totalPrice" style={{ fontWeight: "bold" }}>Total bill<span
                                      className="pool">(*)</span></label>
                                    <Field id="totalPrice" type="text" name="totalPrice" value={form.totalPrice} onChange={handleChange} />
                                    <ErrorMessage name='totalPrice' component="div" className='text-red' />

                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 pt-2">
                                <button type="submit" className="mt-4 btn btn-primary">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Formik>
      </div>
    </>
  )
}