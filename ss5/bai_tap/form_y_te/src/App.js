import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'
const genders = [
  { label: "Nam", value: "Nam" },
  { label: "Nữ", value: "Nữ" },

];
const REGEX = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Z ]{2,}$/, "Xin nhập đúng định dạng. vd: Huynh Duc")
    .required("Họ tên không được đỏ trống"),
  idCard: yup.string().required("Số hộ chiếu/CMND không được bỏ trống"),
  dateOfBirth: yup.number().min(1900).required("Ngày sinh không được bỏ trống").test(
    'is-date-of-birth-valid',
    'Năm sinh phải lớn hơn hoặc bằng 1900',
    (value) => value >= 1900
  ),
  gender: yup.string().required("Giới tính không được bỏ trống"),
  nationality: yup.string().required("Quốc tịch không được bỏ trống"),
  company: yup.string().required("Công việc không được bỏ trống"),
  workPart: yup.string().required("Bộ phân làm việc không được bỏ trống"),
  healthInsurance: yup.bool(),
  country: yup.string().required("Tỉnh/thành không được bỏ trống"),
  district: yup.string().required("Quận/huyện không được bỏ trống"),
  ward: yup.string().required("Phường/xã không được bỏ trống"),
  arpartmentNumber: yup.string().required("Số nhà, phố, tổ dân phố/thôn/đội không được bỏ trống"),
  phone: yup.string().required("Số điện thoại không được để trống"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Xin nhập email đúng định dạng. Vd:example@gmail.com"
    )
    .required("Email không được bỏ trống"),
})
function App() {
  const [form, setForm] = useState({
    name: "",
    idCard: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    company: "",
    workPart: "",
    healthInsurance: "",
    country: "",
    district: "",
    ward: "",
    arpartmentNumber: "",
    phone: "",
    email: ""
  });
  function handleChange(event) {
    setForm({
      ...form,
      gender:event.target.value,
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
        <Formik
          intialForm={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          <Form onSubmit={handleSubmit}>
            <h2>Tờ khai y tế</h2>
            <div className='dInput'>
              <label htmlFor='name'>Họ tên</label>
              <Field className="inputF" type='text' id='name' name='name' onChange={handleChange} value={form.name}></Field>
              <ErrorMessage name='name' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='idCard'>Số hộ chiếu/CMND</label>
              <Field className="inputF" type='text' id='idCard' name='idCard' onChange={handleChange} value={form.idCard}></Field>
              <ErrorMessage name='idCard' component="div" className='text-red' />

            </div>
            <div>
              <label htmlFor='dob'>Năm sinh</label>
              <Field className="inputF" type='number' id='dob' name='dateOfBirth' onChange={handleChange} value={form.dateOfBirth}></Field>
              <ErrorMessage name='dateOfBirth' component="div" className='text-red' />

            </div>
            <div>
              <label>Giới tính</label>
              {genders.map((gender, index) => {
                return (
                  <>
                    <label className="inputR" key={index} htmlFor={gender.value}>
                      {gender.label}
                    </label>
                    <Field id={gender.value} name="gender" type="radio" value={gender.value} checked={form.gender === gender.value} onChange={handleChange}  />
                  </>
                );
              })}
              <ErrorMessage name='gender' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='nationality'>Quốc tịch</label>
              <Field className="inputF" type='text' id='nationality' name='nationality' onChange={handleChange} value={form.nationality}></Field>
              <ErrorMessage name='nationality' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='company'>Công ty làm việc</label>
              <Field className="inputF" type='text' id='company' name='company' onChange={handleChange} value={form.company}></Field>
              <ErrorMessage name='company' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='workPart'>Bộ phận làm việc</label>
              <Field className="inputF" type='text' id='workPart' name='workPart' onChange={handleChange} value={form.workPart}></Field>
              <ErrorMessage name='workPart' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='healthInsurance'>Có thẻ bảo hiểm y tế</label>
              <Field className="inputF" type='text' id='healthInsurance' name='healthInsurance' onChange={handleChange} value={form.healthInsurance}></Field>
              <ErrorMessage name='healthInsurance' component="div" className='text-red' />
            </div>
            <h2>Địa chỉ liên lạc tại Việt Nam</h2>
            <div>
              <label htmlFor='country'>Tỉnh thành</label>
              <Field className="inputF" type='text' id='country' name='country' onChange={handleChange} value={form.country}></Field>
              <ErrorMessage name='country' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='district'>Quận/huyện</label>
              <Field className="inputF" type='text' id='district' name='district' onChange={handleChange} value={form.district}></Field>
              <ErrorMessage name='district' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='ward'>Phường/xã</label>
              <Field className="inputF" type='text' id='ward' name='ward' onChange={handleChange} value={form.ward}></Field>
              <ErrorMessage name='ward' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='apartNum'>Số nhà,phố,tổ dân phố/thôn/đội</label>
              <Field className="inputF" type='text' id='apartNum' name='arpartmentNumber' onChange={handleChange} value={form.arpartmentNumber}></Field>
              <ErrorMessage name='arpartmentNumber' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='phone'>Điện thoại</label>
              <Field className="inputF" type='text' id='phone' name='phone' onChange={handleChange} value={form.phone}></Field>
              <ErrorMessage name='phone' component="div" className='text-red' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <Field className="inputF" type='text' id='email' name='email' onChange={handleChange} value={form.email}></Field>
              <ErrorMessage name='email' component="div" className='text-red' />
            </div>
            <div>
              <button type='submit' >Gửi</button>
            </div>
          </Form>
        </Formik>

      </div>
    </>
  );
}

export default App;
