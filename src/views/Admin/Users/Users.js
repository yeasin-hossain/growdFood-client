/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import User from './User';

function Users() {
    const [allUsers, setAllUsers] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllOrders = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/users`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                setAllUsers(fetchAllOrders.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUserOrder();
    }, [userData.token]);
    const updateStatus = async (statusData, id) => {
        try {
            const updatedOrder = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/users/updateRoleOrBan/${id}`,
                statusData,
                {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                }
            );
            const filterUpdateUser = allUsers.map((user) => {
                if (user._id === id) {
                    if (statusData.type === 'role') {
                        user.role = updatedOrder.data.role;
                    } else {
                        console.log(updatedOrder.data.ban);
                        user.ban = updatedOrder.data.ban;
                    }
                }
                return user;
            });
            toast.success('User updated successfully');
            setAllUsers(filterUpdateUser);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div style={{ minHeight: '65vh' }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Ban</th>
                        <th>Change Role Or Ban </th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => (
                        <User key={index} user={user} updateStatus={updateStatus} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
