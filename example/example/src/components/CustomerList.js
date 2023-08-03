import React, { useEffect, useState } from "react";
import * as customerService from "../service/CustomerService"
import { NavLink, Link } from "react-router-dom";
function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const display = async () => {
        try {
            const res = await customerService.getAllCustomer();
            setCustomers(res)
        } catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        display()
    }, [])
    return (
        <>
            <div className="container-xl mt-5">
                <div className="table-responsive " >
                    <div className="table-wrapper" >
                        <div className="table-title btn-primary" style={{ backgroundColor: "#435D7D", padding: '15px' }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Danh Sách <b>Khách Hàng</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <Link to={`/customer/create`} className="btn btn-primary text-light">Thêm mới</Link>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger text-light" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Xóa</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table  table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll" />
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>#</th>
                                    <th>Họ tên</th>
                                    <th>Số điện thoại</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Giới tính</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers && customers.map((customer, index) => {
                                    return (
                                        <>
                                            <tr key={`st_${index}`}>
                                                <td>
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id="checkbox3" name="options[]" value="1" />
                                                        <label for="checkbox3"></label>
                                                    </span>
                                                </td>
                                                <td>{customer.id}</td>
                                                <td>{customer.name}</td>
                                                <td>{customer.phone}</td>
                                                <td>{customer.email}</td>
                                                <td>{customer.address}</td>
                                                <td>{customer.gender}</td>
                                                <td>
                                                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item"><a href="#" className="page-link">Previous</a></li>
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

        </>
    )
}
export default CustomerList