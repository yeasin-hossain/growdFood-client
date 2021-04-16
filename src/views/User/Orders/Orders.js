/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Order from './Order';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem('growUser'));
                const fetchAllOrders = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/orders/orderByUserId/${userData.id}`,
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
    }, []);
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
                        <th>Status</th>
                        <th>ACtion</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order, index) => (
                        <Order key={index} order={order}>
                            {order.status === 'pending' ? (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    // onClick={() => removeOrder(order._id)}
                                >
                                    Remove
                                </button>
                            ) : (
                                <button type="button" disabled className="btn btn-danger">
                                    Remove
                                </button>
                            )}
                        </Order>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Orders;
