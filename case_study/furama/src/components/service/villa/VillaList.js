import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as villaService from '../../../service/villaService'


export default function ServiceList() {
    const [villas, setVillas] = useState([]);
    const [villa, setVilla] = useState("");
    const display = async () => {
        try {
            const res = await villaService.getAllVilla();
            setVillas(res);
        } catch (error) { console.log(error.message); }
    }
    useEffect(() => {
        display()
    }, [villa])
    return (
        <div className="container-xl" style={{ height: "1000px" }}>
            <div className="table-responsive">
                <div className="table-wrapper">

                    <div className="table-title" >
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Villa</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <Link to={'/services/villas/create'} className="btn btn-outline-light">Add New Service</Link>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" />
                                        <label for="selectAll"></label>
                                    </span>
                                </th>
                                <th>Name</th>
                                <th>Area</th>
                                <th>Price</th>
                                <th>Person</th>
                                <th>Type Rental</th>
                                <th>Type Room</th>
                                <th>Pool Area</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {villas && villas.map((villa, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{villa.name}</td>
                                        <td>{villa.area}</td>
                                        <td>{villa.price}</td>
                                        <td>{villa.person}</td>
                                        <td>{villa.typeRental}</td>
                                        <td>{villa.typeRoom}</td>
                                        <td>{villa.poolArea}</td>

                                        <td>
                                            <Link to={'/services/edit'} className="btn btn-outline-danger">Delete</Link>
                                            <Link to={'/services/edit'} className="btn btn-outline-success">Edit</Link>
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
}