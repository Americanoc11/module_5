import React, { useEffect, useState } from "react";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as workService from '../controller/WorkService';

export function Work() {
    const [listTodo, setListTodo] = useState([]);

    async function handleSubmit(values) {
        const create = await workService.createTodo(values);
        setListTodo(await workService.fillAll());
        window.location.reload();
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await workService.fillAll()
            setListTodo(result);
        }
        fetchApi();


    }, [])

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