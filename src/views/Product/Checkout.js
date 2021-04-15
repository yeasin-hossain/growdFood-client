import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GrowContext } from '../../context/GrowContext';
import StripeForm from './Stripe/StripeForm';

function Checkout() {
    const { productId } = useParams();
    const { apiToken, currentUser } = useContext(GrowContext);
    const [product, setProduct] = useState({});
    const [showOrderInfo, setShowOrderInfo] = useState(false);
    const [address, addAddress] = useState('');
    const [enablePay, setEnablePay] = useState(false);
    const stripePromise = loadStripe(process.env.REACT_APP_Stripe_Api_Key);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const fetchProduct = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/products/singleProduct/${productId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${apiToken}`,
                        },
                    }
                );
                setProduct(fetchProduct.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProduct();
    }, [apiToken, productId]);
    const { name, imageUrl, price, type, description, _id: id } = product;
    const orderInfo = {
        userEmail: currentUser.Email,
        address,
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
            <div className="row">
                <div className="col-md-6 py-3">
                    <img src={imageUrl} className="img-fluid w-100 h-50 my-2" alt="" />
                    <h3>{name}</h3>
                    <h5>৳{price}</h5>
                    <h3>For:- {type}</h3>
                    <h3> {description}</h3>
                    <button
                        type="button"
                        className="btn_custom btn-warning btn my-3"
                        onClick={() => setShowOrderInfo(!showOrderInfo)}
                    >
                        Buy
                    </button>
                </div>
                <div className="col-md-6 py-3">
                    <small>Write Address Here</small>
                    <input
                        type="text"
                        placeholder="Address Here"
                        className="form-control mt-3"
                        required
                        onBlur={(e) => addressHandler(e.target.value)}
                    />
                    {enablePay && (
                        <Elements stripe={stripePromise}>
                            <StripeForm orderInfo={orderInfo} />
                        </Elements>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Checkout;
