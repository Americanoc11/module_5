import React from "react";
const contracts = [
    {
        id: 1,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit:"1000$",
        idContract:1
    },
    {
        id: 2,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit:"1000$",
        idContract:2

    },
    {
        id: 3,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit:"1000$",
        idContract:3

    },
    {
        id: 4,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit:"1000$",
        idContract:4

    },
    {
        id: 5,
        nameService: "House",
        nameCustomer: "Duc",
        dayStart: "1999-12-31",
        dayEnd: "2000-01-01",
        deposit:"1000$",
        idContract:5

    },
]
class Contract extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            contracts && contracts.map((contracts) => (
                <tr key={contracts.id}>
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
            ))
        )
    }
}
export default Contract