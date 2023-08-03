import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import * as customerService from '../service/CustomerService'
import * as position from '../service/posistionService'
import Swal from 'sweetalert2';
function AddCustomer() {
    const [form, setForm] = useState([]);
    const [positions, setPositions] = useState([])
    const navigate = useNavigate();
    const getPosition = async () => {
        const res = await position.getAllPosition();
        setPositions(res);
    }
    useEffect(() => { getPosition() }, [])
    const genders = [
        { label: "Nam", value: "Nam" },
        { label: "Nữ", value: "Nữ" },
        { label: "Khác", value: "Khác" },
    ]


    return (
        <>
            <div className='m-5'>
                <Formik
                    initialValues={{
                        name: "",
                        phone: "",
                        email: "",
                        address: "",
                        gender: "",
                        position: ""

                    }}
                    validationSchema={yup.object({
                        name: yup.string().required(),
                        phone: yup.string().required(),
                        email: yup.string().required(),
                        address: yup.string().required(),
                        gender: yup.string().required(),
                        position: yup.string().required(),
                    })}
                    onSubmit={
                        (values) => {
                            customerService.createCustomer({ ...values, position: JSON.parse(values.position) })
                                .then(() => {
                                    navigate("/");
                                    Swal.fire({
                                        title: "Thêm mới thành công!!!!",
                                        text: "Bấm Ok để tiếp tục!",
                                        icon: "success",
                                        button: "Aww yiss!",
                                    });
                                })
                        }
                    }
                >
                    <Form >
                        <div className='row'>
                            <div className='col-4'></div>
                            <div className='col' style={{ border: "2px solid green", borderRadius: "10px" }}>
                                <h1 style={{ textAlign: "center" }}>Thêm mới khách hàng</h1>
                                <hr></hr>
                                <div className="row align-items-center g-3 mb-3">
                                    <div className="col-auto">
                                        <label htmlFor="name">Họ tên</label>
                                        <Field type="text" className="form-control" id="name" name="name" />
                                        <ErrorMessage name='name' component="div" className='text-red' />

                                    </div>
                                    <div className="col-auto">
                                        <div >
                                            <label htmlFor="gender">Giới tính</label>
                                            <div>
                                                {genders && genders.map((gender, index) => {
                                                    return (
                                                        <div className="form-check form-check-inline" key={`st_${index}`}>
                                                            <Field
                                                                type="radio"
                                                                className="form-check-Field"
                                                                name="gender"
                                                                id={gender.value}
                                                                value={gender.value}
                                                            />
                                                            <label className="form-check-label" htmlFor={gender.value}> {gender.label}</label>
                                                        </div>
                                                    )
                                                })}
                                                {/* <div className="form-check form-check-inline">
                                            <Field type="radio" className="form-check-Field" name="gender" id="radioMale" checked />
                                            <label className="form-check-label" htmlFor="radioMale">Male</label>
                                            <ErrorMessage name='gender' />
                                        </div> */}

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="row align-items-center g-3 mb-3">
                                    <div className="col-auto">
                                        <label htmlFor="phone">Số điện thoại</label>
                                        <Field type="text" className="form-control" id="phone" placeholder="Số điện thoại" name="phone" />
                                        <ErrorMessage name='phone' />


                                    </div>
                                    <div className="col-auto">
                                        {/* <div>
                                            <label htmlFor="hobbies">Sở thích</label>
                                            <ErrorMessage name='hobbies' />

                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field type="checkbox" className="form-check-Field" name="hobbies" id="checkMusic"  />
                                            <label className="form-check-label" htmlFor="checkMusic">Music</label>

                                        </div>
                                        <div className="form-check form-check-inline ms-3">
                                            <Field type="checkbox" className="form-check-Field" name="hobbies" id="checkTravel" />
                                            <label className="form-check-label" htmlFor="checkTravel">Travel</label>

                                        </div>
                                        <div className="form-check form-check-inline ms-3">
                                            <Field type="checkbox" className="form-check-Field" name="hobbies" id="checkReading"  />
                                            <label className="form-check-label" htmlFor="checkReading">Reading</label>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="row align-items-center g-3 mb-3">
                                    <div className="col-auto">
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" className="form-control" id="email" placeholder="Email" name="email" />
                                        <ErrorMessage name='email' />

                                    </div>
                                    <div className="col-auto">
                                        <label htmlFor="position">Chức vụ</label>
                                        <Field as="select" className="form-select"
                                            aria-label="Default select example"
                                            name="position">
                                            <option value="">Default select</option>
                                            {positions && positions.map((position, index) => {
                                                return (
                                                    <option key={`st_${index}`} value={`${JSON.stringify(position)}`}>{position.name}</option>
                                                )
                                            })}
                                        </Field>
                                        {/* <select className="form-select ">
                                    <option>Default select</option>
                                </select> */}
                                        <ErrorMessage name='position' />

                                    </div>
                                </div>
                                <div className="row align-items-center g-3 mb-3">
                                    <div className="col-auto">
                                        <label htmlFor="address">Địa chỉ</label>
                                        <Field type="text" className="form-control" id="address" placeholder="Địa chỉ" name="address" />
                                        <ErrorMessage name='address' />

                                    </div>
                                </div>
                                <div className="row align-items-center g-3 mb-3">
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-success">Gửi</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4'></div>

                        </div>

                    </Form>
                </Formik>
            </div >
        </>
    )
}
export default AddCustomer