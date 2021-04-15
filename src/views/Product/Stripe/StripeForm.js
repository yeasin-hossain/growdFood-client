import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext } from 'react';
import { GrowContext } from '../../../context/GrowContext';

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
    const { apiToken } = useContext(GrowContext);
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

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
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            try {
                const { id, type } = paymentMethod;
                const orderInfoWithStripe = { ...orderInfo, cardId: id, cardType: type };
                const response = await axios.post(
                    `${process.env.REACT_APP_API_BASE_URL}api/orders/saveOrder`,
                    orderInfoWithStripe,
                    {
                        headers: {
                            Authorization: `Bearer ${apiToken}`,
                        },
                    }
                );

                if (response.status === 200) {
                    console.log(response);
                }
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
        </div>
    );
}

export default StripeForm;
