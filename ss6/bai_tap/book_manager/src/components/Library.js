import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import * as libraryService from '../controller/LibraryService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { Form } from "formik";

export function Library() {
    const [librarys, setLibrarys] = useState([])
    const [title, setTitle] = useState("");
    useEffect(() => {
        const disPlay = async () => {
            try {
                const result = await libraryService.getAll()
                setLibrarys(result)
            } catch (error) {
                console.log('error')
            }
        }
        disPlay();
    }, [])



    return (

        <>
            <div className='container'>
                <h1>Library</h1>
                <button className="btn btn-success btn-add"><NavLink style={{ textDecoration: 'none', color: 'white' }} to={'/create'} classNameName='nav-link'>Create
                    New</NavLink></button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            librarys?.map((values) => (
                                <tr key={values}>
                                    <th>{values.title}</th>
                                    <td>{values.quantity}</td>
                                    <td>
                                        <button className='nav-link btn btn-secondary'>Update</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>


        </>

    )
}