import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { GrowContext } from '../../../context/GrowContext';

function Review() {
    const [review, setReview] = useState('');
    const { currentUser } = useContext(GrowContext);
    const history = useHistory();
    const submitReview = (e) => {
        e.preventDefault();

        try {
            if (review.length < 10) {
                toast.error('Review must be at least 10');
                return;
            }
            const reviewInfo = {
                fullName: currentUser.name,
                userEmail: currentUser.Email,
                review,
            };
            const userData = JSON.parse(localStorage.getItem('growUser'));
            const saveReview = axios.post(
                `${process.env.REACT_APP_API_BASE_URL}api/reviews/saveReview`,
                reviewInfo,
                {
                    headers: {
                        Authorization: `Bearer ${userData.token}`,
                    },
                }
            );
            if (saveReview.data?.message) {
                toast.error(saveReview.data?.message);
                return;
            }
            toast.success('Your Review Is Done');
            history.push('/user/order');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-50 p-5 userReview">
            <h3>Write Your Review</h3>
            <form onSubmit={submitReview}>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="I,m Satisfied"
                        rows="3"
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn_custom btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Review;
