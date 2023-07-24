import React, { Component, useState } from 'react';
import axios from 'axios'

export default function Users() {
    const [state, setState] = useState();
    const componentDidMount = () => {
        axios
            .get("http://localhost:3001/api/users")
            .then(res => {
                setState({ users: res.data });
            })
            .catch(err => {
                throw err;
            });
    }
    const handleCreate = () => {
        window.location.href = "/user/add";
    }
    const { users } = state;
    return (
        <div>
            <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <a href={`/user/${user.id}`}> {user.name} </a>
                </div>
            ))}
            <button type="button" onClick={this.handleCreate}>
                Create
            </button>
        </div>
    );
}