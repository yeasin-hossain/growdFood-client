/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';

function OurService() {
    const [items, setItems] = useState([]);
    const [itemType, setItemType] = useState('ifter');

    useEffect(() => {
        const getItems = async () => {
            try {
                const fetchItems = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products/productType/${itemType}`,
                    {
                        headers: {
                            Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzc1MTBhNmNkY2Q5MGM3Y2JkMjhiZSIsIkZ1bGxOYW1lIjoiU2hhbnRvIFJhaG1hbiIsIkVtYWlsIjoic2hhbnRveGRwQHNoYW50by5jb20iLCJyb2xlIjoiY3VzdG9tZXIiLCJiYW4iOmZhbHNlLCJpYXQiOjE2MTg0MzUxNTcsImV4cCI6MTYxODUyMTU1N30.KmuGyysIe6lRULZ5Jgbj-wJq8Ku2HSuWCofhgx9WCPQ',
                        },
                    }
                );
                setItems(fetchItems.data);
            } catch (err) {
                console.log(err);
            }
        };
        getItems();
    }, [itemType]);
    return (
        <div className="py-3 bg-danger">
            <h2 className="text-center py-3 text-white">Our Services</h2>
            <div className="d-flex justify-content-center py-3">
                <button
                    className="btn_custom btn-5 mx-2"
                    type="button"
                    onClick={() => setItemType('ifter')}
                >
                    Ifter
                </button>
                <button
                    className="btn_custom btn-5 mx-2"
                    type="button"
                    onClick={() => setItemType('lunch')}
                >
                    Lunch
                </button>
                <button
                    className="btn_custom btn-5 mx-2"
                    type="button"
                    onClick={() => setItemType('dinner')}
                >
                    Dinner
                </button>
                <button
                    className="btn_custom btn-5 mx-2"
                    type="button"
                    onClick={() => setItemType('breakfast')}
                >
                    Breakfast
                </button>
            </div>
            <div className="services d-flex justify-content-center my-3 flex-wrap">
                {items.map((item, index) => (
                    <Service key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default OurService;
