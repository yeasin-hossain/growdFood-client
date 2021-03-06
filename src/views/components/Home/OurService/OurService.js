/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Spinner/Spinner';
import Service from './Service';

function OurService() {
    const [items, setItems] = useState([]);
    const [itemType, setItemType] = useState('ifter');
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const getItems = async () => {
            try {
                const fetchItems = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/productType/${itemType}`
                );
                setItems(fetchItems.data);
                setSpinner(false);
            } catch (err) {
                console.log(err);
            }
        };
        getItems();
    }, [itemType]);
    return (
        <div className="py-3 bg-danger">
            <h2 className="text-center py-3 text-white">Our Services</h2>
            <div className="d-flex justify-content-center py-3 ourService">
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
                <button
                    className="btn_custom btn-5 mx-2"
                    type="button"
                    onClick={() => setItemType('breakfast')}
                >
                    <Link to="/products" className="btn">
                        All Services
                    </Link>
                </button>
            </div>
            {spinner && <Spinner />}
            <div className="services d-flex justify-content-center my-3 flex-wrap">
                {items.map((item, index) => (
                    <Service key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default OurService;
