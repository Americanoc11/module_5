import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditService } from "../EditService";
import * as roomService from '../../../service/roomService'
export default function ServiceList() {
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState("");
    const display = async () => {
        try {
            const res = await roomService.getAllRoom();
            setRooms(res);
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        display()
    }, [room])
    return (
        <div className="container-xl" style={{ height: "1000px" }}>
            <div className="table-responsive">
                <div className="table-wrapper">

                    <div className="table-title" >
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Room</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <Link to={'/services/rooms/create'} className="btn btn-outline-light">Add New Service</Link>
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
                                <th>Persons</th>
                                <th>Type Rental</th>
                                <th>Service</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms && rooms.map((room, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{room.name}</td>
                                        <td>{room.area}</td>
                                        <td>{room.price}</td>
                                        <td>{room.persons}</td>
                                        <td>{room.typeRental}</td>
                                        <td>{room.accompanyService}</td>
                                        <td>
                                            <Link to={'/services/edit'} className="btn btn-outline-success">Delete</Link>
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