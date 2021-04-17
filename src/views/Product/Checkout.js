import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GrowContext } from '../../context/GrowContext';
import Spinner from '../Spinner/Spinner';
import StripeForm from './Stripe/StripeForm';

function Checkout() {
    const { productId } = useParams();
    const { currentUser } = useContext(GrowContext);
    const [product, setProduct] = useState({});
    const [showOrderInfo, setShowOrderInfo] = useState(false);
    const [address, addAddress] = useState('');
    const [enablePay, setEnablePay] = useState(false);
    const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Api_Key);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem('growUser'));
                const fetchProduct = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products/singleProduct/${productId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );
                setProduct(fetchProduct.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [productId]);
    const { id, userEmail } = currentUser;
    const { name, imageUrl, price, type, description, quantity } = product;
    const orderInfo = {
        userId: id,
        userEmail,
        address,
        quantity,
        productInfo: {
            id,
            name,
            price,
            type,
        },
    };

    const addressHandler = (userAddress) => {
        if (userAddress.length > 5) {
            addAddress(userAddress);
            setEnablePay(true);
        } else {
            addAddress(userAddress);
            setEnablePay(false);
        }
    };
    return (
        <div className="container">
            {loading ? (
                <Spinner />
            ) : (
                <div className="row">
                    <div className="col-md-6 py-3">
                        <img src={imageUrl} className="img-fluid w-100 h-50 my-2" alt="" />
                        <h3>{name}</h3>
                        <h5>৳{price}</h5>
                        <h3>For:- {type}</h3>
                        <p> {description}</p>
                        {!showOrderInfo ? (
                            <button
                                type="button"
                                className="btn_custom btn-warning btn my-3 shadow"
                                onClick={() => setShowOrderInfo(true)}
                            >
                                Buy
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn_custom btn-danger shadow btn my-3"
                                onClick={() => setShowOrderInfo(false)}
                            >
                                Not Now
                            </button>
                        )}
                    </div>
                    <div className="col-md-6 py-3">
                        {showOrderInfo && (
                            <>
                                <small>Write Address Here & Click Out Of Box</small>
                                <input
                                    type="text"
                                    placeholder="Address Here"
                                    className="form-control my-3"
                                    required
                                    onBlur={(e) => addressHandler(e.target.value)}
                                />
                                <small>Quantity </small>
                                <input
                                    type="text"
                                    placeholder="Quantity minimum 10 Person"
                                    className="form-control my-3"
                                    required
                                    onChange={(e) =>
                                        setProduct({ ...product, quantity: e.target.value })
                                    }
                                />
                                <small>Service Date </small>
                                <input
                                    type="date"
                                    placeholder="Address Here"
                                    className="form-control mt-3"
                                    required
                                    onChange={(e) =>
                                        setProduct({ ...product, createdAt: e.target.value })
                                    }
                                />
                                {enablePay && (
                                    <Elements stripe={stripePromise}>
                                        <StripeForm orderInfo={orderInfo} />
                                    </Elements>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
