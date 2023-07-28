import React from "react";
import { NavLink } from "react-router-dom";
import { EditService } from "./EditService";
const services = [
    {
        id: 1,
        name: "House",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    },
    {
        id: 2,
        name: "House",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    },
    {
        id: 3,
        name: "Villa",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    },
    {
        id: 4,
        name: "Villa",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    }, {
        id: 5,
        name: "Room",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    }, {
        id: 6,
        name: "Room",
        area: 23,
        price: "1000$",
        person: 4,
        type: "1 month"
    },
]
export default function ServiceList() {

    return (
        <div className="container-xl" style={{ height: "1000px" }}>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title" >
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Service</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <NavLink to={'/services/houses'} className="btn btn-outline-light">House Service</NavLink>
                                <NavLink to={'/services/villas'} className="btn btn-outline-light">Villa Service</NavLink>
                                <NavLink to={'/services/rooms'} className="btn btn-outline-light">Room Service</NavLink>

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
                                <th>Type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services && services.map((services, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{services.id}</td>
                                        <td>{services.name}</td>
                                        <td>{services.area}</td>
                                        <td>{services.price}</td>
                                        <td>{services.person}</td>
                                        <td>{services.type}</td>
                                        <td>
                                            <a href="#deleteEmployeeModal" className="btn btn-outline-danger" data-toggle="modal"><span>Delete</span></a>
                                            <NavLink to={'/services/edit'} className="btn btn-outline-success">Edit</NavLink>
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
                            <li className="page-item"><a href="#" className="page-NavLink">1</a></li>
                            <li className="page-item"><a href="#" className="page-NavLink">2</a></li>
                            <li className="page-item active"><a href="#" className="page-NavLink">3</a></li>
                            <li className="page-item"><a href="#" className="page-NavLink">4</a></li>
                            <li className="page-item"><a href="#" className="page-NavLink">5</a></li>
                            <li className="page-item"><a href="#" className="page-NavLink">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}