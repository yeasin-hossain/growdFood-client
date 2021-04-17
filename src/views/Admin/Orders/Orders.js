/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Order from '../../User/Orders/Order';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllOrders = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/orders`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                setAllOrders(fetchAllOrders.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUserOrder();
    }, [userData.token]);
    const updateStatus = async (status, id) => {
        try {
            const updatedUser = await axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/orders/changeStatus/${id}`,
                status,
                {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                }
            );

            const filterUpdateUser = allOrders.map((order) => {
                if (order._id === id) {
                    // eslint-disable-next-line no-param-reassign
                    order.status = updatedUser.data.status;
                }
                return order;
            });
            toast.success('Status updated successfully');
            setAllOrders(filterUpdateUser);
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
                        <th>Price</th>
                        <th>Paid By</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>ACtion</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order, index) => (
                        <Order key={index} order={order}>
                            <DropdownButton id="dropdown-basic-button" title="Cancel Or Confirm">
                                <Dropdown.Item>
                                    <button
                                        type="button"
                                        className="btn "
                                        onClick={() =>
                                            updateStatus({ status: 'confirm' }, order._id)
                                        }
                                    >
                                        Confirm
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button
                                        type="button"
                                        className="btn "
                                        onClick={() =>
                                            updateStatus({ status: 'processing' }, order._id)
                                        }
                                    >
                                        Processing
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button
                                        type="button"
                                        className="btn "
                                        onClick={() =>
                                            updateStatus({ status: 'cancel' }, order._id)
                                        }
                                    >
                                        Cancel
                                    </button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <button
                                        type="button"
                                        className="btn "
                                        onClick={() =>
                                            updateStatus({ status: 'delivered' }, order._id)
                                        }
                                    >
                                        Delivered
                                    </button>
                                </Dropdown.Item>
                            </DropdownButton>
                        </Order>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
