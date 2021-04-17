/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../../components/Home/OurService/Service';

function Products() {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            try {
                const fetchItems = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/getAllProducts`
                );
                setAllProducts(fetchItems.data);
            } catch (err) {
                console.log(err);
            }
        };
        getItems();
    }, []);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {/* {allProducts.map((product, index) => (
                <Product key={index} product={product} />
            ))} */}
            {allProducts.map((item, index) => (
                <Service key={index} item={item} />
            ))}
        </div>
    );
}

export default Products;
