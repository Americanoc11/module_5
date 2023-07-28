import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import * as customerList from '../../service/customerService'
function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState("");
    const navigate = useNavigate();
    const display = async () => {
        try {
            const res = await customerList.getAllCustomer();
            setCustomers(res)
        } catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        display()
    }, [customer])
    return (
        <div className="container-xl" id="furamaList" style={{ height: "1000px" }}>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title" >
                        <div className="row" >
                            <div className="col-sm-6" >
                                <h2>Manage <b>Customer</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <NavLink to={'/customers/create'} className="btn btn-outline-light">Add New Customer</NavLink>

                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Identity</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers && customers.map((customers, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>{customers.id}</td>
                                        <td>{customers.name}</td>
                                        <td>{customers.dob}</td>
                                        <td>{customers.gender}</td>
                                        <td>{customers.pastCode}</td>
                                        <td>{customers.phone}</td>
                                        <td>{customers.email}</td>
                                        <td>{customers.address}</td>
                                        <td>
                                            <a href="#deleteEmployeeModal" className="btn btn-outline-danger text-light" data-toggle="modal"><span>Delete</span></a>
                                            <NavLink to={'/customers/edit'} className="btn btn-outline-success">Edit</NavLink>

                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul className="pagination">
                            <li className="page-item disabled"><a href="#">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CustomerList