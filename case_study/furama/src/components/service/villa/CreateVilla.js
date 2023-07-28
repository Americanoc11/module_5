import React, { useState } from "react"
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function CreateVilla() {
    const [form, setForm] = useState({
        name: "",
        area: "",
        price: "",
        person: "",
        typeRental: "",
        typeRoom: "",
        describle: "",
        floor: ""

    })
    const typeRentals = [
        { label: "Hour", value: "Hour" },
        { label: "Day", value: "Day" },
        { label: "Month", value: "Month" },
        { label: "Year", value: "Year" }
    ]
    // const REGEX = yup.object().shape({
    //     name: yup.string().required("Identity Contract is a required field"),
    //     area: yup.string().required(),
    //     price: yup.string().required(),
    //     person: yup.string().required(),
    //     typeRental: yup.string().required(),
    //     typeRoom: yup.string.required(),
    //     describle: yup.string.required(),
    //     floor: yup.string.required()
    // })
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
    // function handleValidate() {
    //     try {
    //         REGEX.validateSync(form, { abortEarly: false });
    //         return {}
    //     } catch (errors) {
    //         const validationErrors = {};
    //         errors.inner.forEach(error => {
    //             validationErrors[error.path] = error.message;
    //         });
    //         return validationErrors;
    //     }

    // }
    return (
        <>
            <div id="customerCss">
                <Formik
                    intialForm={form}
                    // validate={handleValidate}
                    onSubmit={handleSubmit}
                >
                    <section className="vh-100" style={{}}>
                        <div className="container py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-xl-10">
                                    <div className="card" style={{ borderRadius: "1rem" }}>
                                        <div className="row g-0">
                                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                                <img src="../images/property-2.jpg"
                                                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }} />
                                            </div>
                                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                <div className="card-body p-4 p-lg-5 text-black">
                                                    <Form onSubmit={handleSubmit}>
                                                        <h3>Add New Villa </h3>

                                                        <div className="user">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="name" style={{ fontWeight: "bold" }}>Name Service<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="name" type="text" name="name" onChange={handleChange} />
                                                                        <ErrorMessage name='name' component="div" className='text-red' />

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
                                                                        <label htmlFor="price" style={{ fontWeight: "bold" }}>Cost Price<span
                                                                            className="spanRed">(*)</span>:</label>
                                                                        <Field id="price" type="text" name="price" onChange={handleChange} />
                                                                        <ErrorMessage name='price' component="div" className='text-red' />

                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="person" style={{ fontWeight: "bold" }}>Person<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="person" type="text" name="person" onChange={handleChange} />
                                                                        <ErrorMessage name='person' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="typeRental" style={{ fontWeight: "bold" }}>Type Rental<span
                                                                            className="spanRed">(*)</span></label><br></br>
                                                                        <select name="typeRental" >
                                                                            <option value={form.typeService[0]} onChange={handleChange}>Hour</option>
                                                                            <option value={form.typeService[1]} onChange={handleChange}>Day</option>
                                                                            <option value={form.typeService[2]} onChange={handleChange}>Month</option>
                                                                            <option value={form.typeService[3]} onChange={handleChange}>Year</option>

                                                                        </select>
                                                                        <ErrorMessage name='typeRental' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                            {/* <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="typeRoom" style={{ fontWeight: "bold" }}>Type Room<span
                                                                            className="spanRed">(*)</span></label><br></br>
                                                                        <select name="typeRoom" >
                                                                            <option value={form.typeService[0]} onChange={handleChange}>Small</option>
                                                                            <option value={form.typeService[1]} onChange={handleChange}>Medium</option>
                                                                            <option value={form.typeService[2]} onChange={handleChange}>Vip</option>

                                                                        </select>
                                                                        <ErrorMessage name='typeRoom' component="div" className='text-red' />
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="describe" style={{ fontWeight: "bold" }}>Describe<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="describe" type="text" name="describe" onChange={handleChange} />
                                                                        <ErrorMessage name='describe' component="div" className='text-red' />

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <div>
                                                                        <label htmlFor="float" style={{ fontWeight: "bold" }}>Float<span
                                                                            className="spanRed">(*)</span></label>
                                                                        <Field id="float" type="text" name="float" onChange={handleChange} />
                                                                        <ErrorMessage name='float' component="div" className='text-red' />

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