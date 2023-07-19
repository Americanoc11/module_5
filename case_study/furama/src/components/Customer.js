import React from "react";
const customer = [
    {
        id: 1,
        name: "Duc",
        age: 23,
        address: "11 NVL"
    },
    {
        id: 2,
        name: "Huynh Duc",
        age: 23,
        address: "13 NVL"
    },
    {
        id: 3,
        name: "Duc",
        age: 23,
        address: "11 NVL"
    },
    {
        id: 4,
        name: "Duc",
        age: 23,
        address: "11 NVL"
    },
    {
        id: 5,
        name: "Duc",
        age: 23,
        address: "11 NVL"
    },
]
class Customer extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            customer && customer.map((customer) => (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.age}</td>
                    <td>{customer.address}</td>
                </tr>
            ))
        )
    }
}
export default Customer