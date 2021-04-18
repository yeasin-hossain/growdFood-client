/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Order from './Order';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    const [spinner, setSpinner] = useState(true);
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
                setSpinner(false);
            } catch (err) {
                console.log(err);
            }
        };
        getUserOrder();
    }, []);
    return (
        <div style={{ minHeight: '65vh' }}>
            {spinner && <Spinner />}
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
                            {order.status === 'pending' ? (
                                // For Requirements User Can't Delete Order
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    // onClick={() => removeOrder(order._id)}
                                    disabled
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
