import React from "react";
const service = [
    {
        id: 1,
        name: "House",
        area: 23,
        price: "1000$"
    },
    {
        id: 2,
        name: "House",
        area: 23,
        price: "1000$"
    },
    {
        id: 3,
        name: "Villa",
        area: 23,
        price: "800$"
    },
    {
        id: 4,
        name: "Villa",
        area: 23,
        price: "800$"
    },
    {
        id: 5,
        name: "Room",
        area: 23,
        price: "600$"
    },
    {
        id: 6,
        name: "Room",
        area: 23,
        price: "600$"
    },
]
class Service extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            service && service.map((service) => (
                <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.area}</td>
                    <td>{service.price}</td>
                    <td>
                    <a href="#deleteEmployeeModal" className="btn btn-outline-danger text-light" data-toggle="modal"><span>Delete</span></a>
                    </td>
                </tr>
            ))
        )
    }
}
export default Service