import React from "react";
const services = [
    {
        id: 1,
        name: "House",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    },
    {
        id: 2,
        name: "House",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    },
    {
        id: 3,
        name: "Villa",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    },
    {
        id: 4,
        name: "Villa",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    }, {
        id: 5,
        name: "Room",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    }, {
        id: 6,
        name: "Room",
        area: 23,
        price: "1000$",
        person:4,
        type:"1 month"
    },
]
class Service extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            services && services.map((services) => (
                <tr key={services.id}>
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
                    <a href="#deleteEmployeeModal" className="btn btn-outline-danger text-light" data-toggle="modal"><span>Delete</span></a>
                    </td>
                </tr>
            ))
        )
    }
}
export default Service