import React from 'react';

const student = [
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

            student&&student.map((student) => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))
        )
    }
}
export default Student