import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as workService from '../controller/WorkService';
import { useNavigate } from "react-router-dom";
export function Work() {
    const [listTodo, setListTodo] = useState([]);
    const navigate = useNavigate();
    const fetchApi = async () => {
        const result = await workService.fillAll()
        setListTodo(result);
    }
    async function handleSubmit(values) {
        const create = await workService.createTodo(values);
        setListTodo(await workService.fillAll());
        navigate("/")
        window.location.reload();
    }
    fetchApi();

    return (
        <>
            <Formik

                initialValues={
                    {
                        title: ""
                    }
                }
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>Todo List</h1>
                    <Form>
                        <div className="form-floating">
                            <Field className="form-control" placeholder="Enter Todo "
                                id="floatingTextarea" name='title' />
                            <button className='btn btn-secondary' type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
            <ul>
                {
                    listTodo && listTodo.map((todo, index) => (
                        <li key={`st_${index}`}>{todo.title}</li>
                    ))
                }
            </ul>
        </>

    )
}