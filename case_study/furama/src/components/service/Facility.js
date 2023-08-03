import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import * as facilityService from "../../service/FacilityService"
export default function FacilityList() {
    const [facilitys, setFacilitys] = useState([]);
    const getFacility = async () => {
        const res = await facilityService.getFacility();
        setFacilitys(res)
    }
    useEffect(() => {
        getFacility()
    },[])
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
                                <th>Service</th>
                                <th>Area</th>
                                <th>Price</th>
                                <th>Persons</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {facilitys && facilitys.map((facility, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{facility.name}</td>
                                        <td>{facility.useArea}</td>
                                        <td>{facility.price}</td>
                                        <td>{facility.persons}</td>
                                        <td>
                                            <NavLink to={'/services/edit'} className="btn btn-outline-success">Edit</NavLink>
                                            <NavLink to={'/services/edit'} className="btn btn-outline-success">Delete</NavLink>
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