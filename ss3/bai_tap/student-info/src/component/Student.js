import React from 'react';

const students = [
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
    }
]
class Student extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (

            students&&students.map((students) => (
                <tr key={students.id}>
                    <td>{students.id}</td>
                    <td>{students.name}</td>
                    <td>{students.age}</td>
                    <td>{students.address}</td>
                </tr>
            ))
        )
    }
}
export default Student