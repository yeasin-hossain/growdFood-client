import React from 'react';

function Order({ order, children }) {
    const { cardType, userEmail, address, createdAt, status, quantity } = order;
    const { name, price } = order.productInfo;
    const date = new Date(createdAt).toISOString().slice(0, 10);
    return (
        <tr>
            <td className="align-middle" data-label="Name">
                {name}
            </td>
            <td className="align-middle" data-label="Price">
                ৳{price} * 1
            </td>
            <td className="align-middle" data-label="Paid By">
                {cardType}
            </td>
            <td className="align-middle" data-label="Email">
                {userEmail}
            </td>
            <td className="align-middle" data-label="Address">
                {address}
            </td>
            <td className="align-middle" data-label="Order Date">
                {date}
            </td>
            <td className="align-middle" data-label="Order Date">
                {quantity} Person
            </td>
            <td className="align-middle" data-label="Status">
                {status}
            </td>
            <td className="align-middle" data-label="Action">
                {children}
            </td>
        </tr>
    );
}

export default Order;
