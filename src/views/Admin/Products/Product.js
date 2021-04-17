import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Product({ product, updateStatus }) {
    const { name, price, imageUrl, stock, _id: id, type } = product;
    return (
        <tr>
            <td className="align-middle" data-label="Image">
                <img
                    src={imageUrl}
                    alt=""
                    style={{ height: '50px', width: '70px' }}
                    className="rounded shadow"
                />
            </td>
            <td className="align-middle" data-label="Name">
                {name}
            </td>
            <td className="align-middle" data-label="Price">
                ৳{price}
            </td>
            <td className="align-middle" data-label="Price">
                {type}
            </td>
            <td className="align-middle" data-label="Stock">
                {stock ? 'True' : 'False'}
            </td>
            <td className="align-middle" data-label="Stock">
                <DropdownButton id="dropdown-basic-button" title="Delete Or Stock">
                    <Dropdown.Item>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => updateStatus('delete', id)}
                        >
                            Delete
                        </button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => updateStatus('stock', id)}
                        >
                            Stock Toggle
                        </button>
                    </Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>
    );
}

export default Product;
