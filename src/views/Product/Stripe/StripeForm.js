import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

const cardOptions = {
    style: {
        base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
};
function StripeForm({ orderInfo }) {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [orderSpinner, setOrderSpinner] = useState(null);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setOrderSpinner(true);
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setOrderSpinner(false);
            toast.error(error.message);
        } else {
            setOrderSpinner(true);
            try {
                const userData = JSON.parse(localStorage.getItem('growUser'));
                const { id, type } = paymentMethod;
                const orderInfoWithStripe = { ...orderInfo, cardId: id, cardType: type };
                const response = await axios.post(
                    `${process.env.REACT_APP_API_BASE_URL}api/orders/saveOrder`,
                    orderInfoWithStripe,
                    {
                        headers: {
                            Authorization: `Bearer ${userData.token}`,
                        },
                    }
                );

                if (response.data.message) {
                    setOrderSpinner(false);
                    // eslint-disable-next-line consistent-return
                    return toast.error(response.data.message);
                }
                setOrderSpinner(true);
                history.push('/');
                toast.success('Your Order Is Success');
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <CardElement options={cardOptions} />
                <button type="submit" className="btn btn-primary mt-3" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {orderSpinner && <Spinner />}
        </div>
    );
}

export default StripeForm;
