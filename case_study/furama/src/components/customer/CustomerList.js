import React from "react";
const customers = [
    {
        id: 1,
        name: "Duc",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone: "0123456789",
        email: "duc@gmail.com",
        address: "11 NVL"
    },
    {
        id: 2,
        name: "Hanh",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone: "0123456789",
        email: "duc@gmail.com",
        address: "11 NVL"
    },
    {
        id: 3,
        name: "Vu",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone: "0123456789",
        email: "duc@gmail.com",
        address: "11 NVL"
    },
];
function CustomerList() {
    return (
            <div className="container-xl" id="furamaList">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title" >
                            <div className="row" >
                                <div className="col-sm-6" >
                                    <h2>Manage <b>Customer</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-outline-light" data-toggle="modal"><span>Add New Employee</span></a>
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
                                {customers&&customers.map((customers, index) => {
                                    return (
                                        <tr key={`st_${index}`}>
                                            <td>
                                                <span className="custom-checkbox">
                                                    <input type="checkbox" id="selectAll" />
                                                    <label for="selectAll"></label>
                                                </span>
                                            </td>
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