/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Product from './Product';

function AllProducts() {
    const [allProducts, setAllProducts] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const fetchAllOrders = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                setAllProducts(fetchAllOrders.data);
            } catch (err) {
                console.log(err);
            }
        };
        getAllProducts();
    }, [userData.token]);
    const updateStatus = async (type, id) => {
        try {
            if (type === 'delete') {
                const deleteProduct = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products/productDelete/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                const FilterDeleteProduct = allProducts.filter(
                    (product) => product._id !== deleteProduct.data._id
                );
                toast.success('Product deleted successfully');
                setAllProducts(FilterDeleteProduct);
            } else {
                const updateProduct = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products/updateProductStock/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                const filterUpdateProduct = allProducts.map((product) => {
                    if (product._id === id) {
                        // eslint-disable-next-line no-param-reassign
                        product.stock = updateProduct.data.stock;
                    }
                    return product;
                });
                toast.success('Product Update successfully');
                setAllProducts(filterUpdateProduct);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>ACtion</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((product, index) => (
                        <Product key={index} product={product} updateStatus={updateStatus} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllProducts;
