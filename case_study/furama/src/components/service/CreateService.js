import React, { useState } from "react"
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function CreateService() {
    const [form, setForm] = useState({
        nameService: "",
        area: "",
        costPrice: "",
        person: "",
        typeService: "",

    })
    const typeServices = [
        { label: "Hour", value: "Hour" },
        { label: "Day", value: "Day" },
        { label: "Month", value: "Month" },
        { label: "Year", value: "Year" }
    ]
    const REGEX = yup.object().shape({
        nameService: yup.string().required("Identity Contract is a required field"),
        area: yup.string().required(),
        costPrice: yup.string().required(),
        person: yup.string().required(),
        deposit: yup.string().required(),
        typeService: yup.string().required(),
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
            <div id="customerCss">
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
                                                        <h3>Add New Service </h3>

                                                        <div className="user">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="nameService" style={{ fontWeight: "bold" }}>Name Service<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="nameService" type="text" name="nameService" onChange={handleChange} />
                                                                        <ErrorMessage name='nameService' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="area" style={{ fontWeight: "bold" }}>Area<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="area" type="text" name="area" onChange={handleChange} />
                                                                        <ErrorMessage name='area' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="cost" style={{ fontWeight: "bold" }}>Cost Price<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="cost" type="text" name="costPrice" onChange={handleChange} />
                                                                        <ErrorMessage name='costPrice' component="div" className='text-red' />

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="person" style={{ fontWeight: "bold" }}>Person<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="person" type="text" name="person" onChange={handleChange} />
                                                                        <ErrorMessage name='idContract' component="div" className='text-red' />

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="typeService" style={{ fontWeight: "bold" }}>Type Service<span
                                                                            className="spanRed">(*)</span></label><br></br>
                                                                        <select name="typeService" >
                                                                            <option value={form.typeService[0]} onChange={handleChange}>Member</option>
                                                                            <option value={form.typeService[1]} onChange={handleChange}>Silver</option>
                                                                            <option value={form.typeService[2]} onChange={handleChange}>Gold</option>
                                                                            <option value={form.typeService[3]} onChange={handleChange}>Diamond</option>
                                                                            <option value={form.typeService[4]} onChange={handleChange}>Platium</option>

                                                                        </select>
                                                                        <ErrorMessage name='typeService' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 pt-2">
                                                                <button type="submit" value="Submit" className="mt-4 btn btn-primary">
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