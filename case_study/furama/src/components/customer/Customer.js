import React from "react";
const customers = [
    {
        id: 1,
        name: "Duc",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone:"0123456789",
        email:"duc@gmail.com",
        address:"11 NVL"
    },
    {
        id: 2,
        name: "Hanh",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone:"0123456789",
        email:"duc@gmail.com",
        address:"11 NVL"
    },
    {
        id: 3,
        name: "Vu",
        dob: 23,
        gender: "Male",
        pastCode: "011XXXXX333",
        phone:"0123456789",
        email:"duc@gmail.com",
        address:"11 NVL"
    },
]
class Customer extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            customers && customers.map((customers) => (
                <tr key={customers.id}>
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
            ))
        )
    }
}
export default Customer