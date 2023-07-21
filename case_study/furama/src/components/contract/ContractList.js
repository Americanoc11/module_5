import React from "react";
const contracts = [
    {
        id: 1,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit: "1000$",
        idContract: 1
    },
    {
        id: 2,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit: "1000$",
        idContract: 2

    },
    {
        id: 3,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit: "1000$",
        idContract: 3

    },
    {
        id: 4,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit: "1000$",
        idContract: 4

    },
    {
        id: 5,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit: "1000$",
        idContract: 5

    },
]
export default function ContractList() {
    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title" >
                        <div className="row">
                            <div className="col-sm-6">
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
                                <th>Id contract</th>
                                <th>Name Service</th>
                                <th>Name customer</th>
                                <th>Day Start</th>
                                <th>Day End</th>
                                <th>Deposit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contracts && contracts.map((contracts, index) => {
                                return (
                                    <tr key={`st_${index}`}>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="selectAll" />
                                                <label for="selectAll"></label>
                                            </span>
                                        </td>
                                        <td>{contracts.idContract}</td>
                                        <td>{contracts.nameService}</td>
                                        <td>{contracts.nameCustomer}</td>
                                        <td>{contracts.dayStart}</td>
                                        <td>{contracts.dayEnd}</td>
                                        <td>{contracts.deposit}</td>
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
}
