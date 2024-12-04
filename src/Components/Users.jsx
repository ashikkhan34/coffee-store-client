import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                //delete from database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "You're file TEMPhas been deleted.",
                                icon: "success"
                              });

                              const remaining = users.filter(user => user._id !== id)
                              setUsers(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-3xl text-red-600'>Users:{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last signIntime</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <th>3</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignInTime}</td>

                                    <td>
                                        <button className='btn btn-success mr-2'>Edit</button>
                                        <button onClick={() => handleUserDelete(user._id)} className='btn btn-primary'>X</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;