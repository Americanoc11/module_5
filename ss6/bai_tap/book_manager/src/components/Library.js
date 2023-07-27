import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import * as libraryService from '../service/LibraryService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function Library() {
    const [librarys, setLibrarys] = useState([])
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [idDelete, setIdDel] = useState(0);
    const [showModal, setShowModal] = useState(true)
    const detailBook = async (id) => {
        try {
            const book = await libraryService.getById(id)
        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteBook = async (id) => {
        await libraryService.deleteById(id, detailBook(id))
        const res = await libraryService.getAll()
        setLibrarys(res);
        setShowModal(false)
        navigate('/')
    }
    const handleConfirm = (book) => {
        setTitle(book.title)
        setIdDel(book.id)
        console.log(title, book);
    }

    useEffect(() => {
        disPlay();
    }, [])

    const disPlay = async () => {
        try {
            const result = await libraryService.getAll()
            setLibrarys(result)
        } catch (error) {
            console.log('error')
        }
    }
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
                            librarys && librarys?.map((values, index) => (
                                <tr key={`st_${index}`}>
                                    <th>{values.title}</th>
                                    <td>{values.quantity}</td>
                                    <td>
                                        <button className='btn btn-primary'><NavLink
                                            to={'/update/' + values.id} style={{ textDecoration: "none", color: "white" }}> Edit</NavLink></button>
                                    </td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModalDelete"
                                            onClick={() => handleConfirm(values)} >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                    data-bs-backdrop={showModal ? "true" : "static"}
                    data-bs-keyboard={showModal ? "true" : "false"}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                Bạn có muốn xóa <span>{title}</span> ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger"
                                    onClick={() => deleteBook(idDelete)}>Delete</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}