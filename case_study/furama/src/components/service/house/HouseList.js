import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as houseService from '../../../service/houseService'
import axios from "axios";
export default function HouseList() {
    const [houses, setHouses] = useState([]);
    const [house, setHouse] = useState([]);
    const display = async () => {
        try {
            const res = await houseService.getAllHouse()
            setHouses(res)
        } catch (error) { console.log(error.message); }
    }
    useEffect(() => {
        display()
    }, [house])
    return (
        <div className="container-xl" style={{ height: "1000px" }}>
            <div className="table-responsive">
                <div className="table-wrapper">

                    <div className="table-title" >
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>House</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <Link to={'/services/houses/create'} className="btn btn-outline-light">Add New Service</Link>

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
                                <th>Float</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {houses && houses.map((house, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{house.name}</td>
                                        <td>{house.area}</td>
                                        <td>{house.price}</td>
                                        <td>{house.person}</td>
                                        <td>{house.typeRental}</td>
                                        <td>{house.typeRoom}</td>
                                        <td>{house.float}</td>
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