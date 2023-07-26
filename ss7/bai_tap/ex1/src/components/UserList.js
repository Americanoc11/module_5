import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUser, deleteUser } from "../redux/actions";
import { deleteById } from "../service/userService";

function UserList() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [idDelete, setIdDelete] = useState(0);
    const [showModal, setShowModal] = useState(true)
    useEffect(() => {
        dispatch(getUser());
    }, []);

    const handleDelete = async (idDelete) => {
        dispatch(deleteUser(idDelete))
        
    }

    const handleSubmit = (id) => {
        setShowModal(false)
        setIdDelete(id)
    }

    return (
        <div>
            <table className="table table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId"
                                    onClick={() => handleSubmit(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


            {/* <!-- Modal Body --> */}
            {/* <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard --> */}
            <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true"
                dataBsBackdrop={showModal ? "true" : "static"}
                dataBsKeyboard={showModal ? "true" : "false"}
            >
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalTitleId">Delete User</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you want delete user?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                No
                            </button>
                            <button type="button" class="btn btn-primary"
                                onClick={() => handleDelete(idDelete)}>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserList;