import React, { useState } from "react"
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
function CreateCustomer() {
    const [form, setForm] = useState({
        fullName: "",
        idCard: "",
        address: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
    });
    const genders = [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Other", value: "Other" },
    ]
    const typeCustomers = [
        { label: "Member", value: "Member" },
        { label: "Silver", value: "Silver" },
        { label: "Gold", value: "Gold" },
        { label: "Diamond", value: "Diamond" },
        { label: "Platium", value: "Platium" },

    ]
    const REGEX = yup.object().shape({
        fullName: yup.string().required(),
        idCard: yup.string().required(),
        address: yup.string().required(),
        email: yup.string().required().matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "Email incorrect. Ex:example@gmail.com"
        )
            .required(),
        phone: yup.string().required(),
        gender: yup.string().required(),
        dateOfBirth: yup.string().required(),
    })
    function handleChange(event) {
        setForm({
            ...form,
            gender: event.target.value,
            typeCustomer: event.target.value,
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
                                                        <h3>Add New Customer </h3>

                                                        <div className="user">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label htmlFor="fullName" style={{ fontWeight: "bold" }}>Full name<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="fullName" type="text" name="fullName" value={form.fullName} onChange={handleChange} />
                                                                        <ErrorMessage name='fullName' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label htmlFor="idCard" style={{ fontWeight: "bold" }}>Identity Card<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="idCard" type="text" name="idCard" value={form.idCard} onChange={handleChange} />
                                                                        <ErrorMessage name='idCard' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label htmlFor="addressCustomer" style={{ fontWeight: "bold" }}>Address<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="addressCustomer" type="text" name="address" value={form.address} onChange={handleChange} />
                                                                        <ErrorMessage name='address' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                                <div className="col-6">

                                                                    <div>
                                                                        <label htmlFor="emailCustomer" style={{ fontWeight: "bold" }}>Email<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="emailCustomer" type="text" name="email" value={form.email} onChange={handleChange} />
                                                                        <ErrorMessage name='email' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label htmlFor="phoneNumber" style={{ fontWeight: "bold" }}>Phone<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="phoneNumber" type="text" name="phone" value={form.phone} onChange={handleChange} />
                                                                        <ErrorMessage name='phone' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label className="mb-3" style={{ fontWeight: "bold" }}>Gender<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        {genders.map((gender, index) => {
                                                                            return (
                                                                                <>
                                                                                    <label className="FieldR" key={`st_${index}`} htmlFor={gender.value} style={{ display: "inline-block" }}>
                                                                                        {gender.label}
                                                                                    </label>
                                                                                    <Field id={gender.value} name="gender" type="radio" value={gender.value} checked={form.gender === gender.value} onChange={handleChange} />
                                                                                </>
                                                                            );
                                                                        })}
                                                                        <ErrorMessage name='gender' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="div1" style={{ marginBottom: "10px" }}>
                                                                        <label htmlFor="myDate" className="mb-3"
                                                                            style={{ display: "block", fontWeight: "bold" }}>Date of birth<span
                                                                                className="spanRed">(*)</span>:</label>
                                                                        <Field style={{ width: "100%", padding: "5px" }}
                                                                            type="date" id="myDate"
                                                                            name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} />
                                                                        <ErrorMessage name='dateOfBirth' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div>
                                                                        <label className="mb-3" style={{ fontWeight: "bold" }}>Type Customer<span
                                                                            className="spanRed">(*)</span>:</label><br></br>
                                                                        <select name="typeCustomer" value={form.typeCustomer} >

                                                                            {typeCustomers.map((customer, index1) => {
                                                                                return (
                                                                                    <>
                                                                                        <option key={`st1_${index1}`} value={customer.value} checked={form.customer === customer.value} onClick={handleChange}>{customer.label}</option>

                                                                                    </>
                                                                                );
                                                                            })}
                                                                        </select >


                                                                        <ErrorMessage name='typeCustomer' component="div" className='text-red' />
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
export default CreateCustomer