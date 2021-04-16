/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Review from './Review';

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
            const getReviews = await axios.get(
                `${process.env.REACT_APP_API_BASE_URL}api/public/getAllReviews`
            );
            setAllReviews(getReviews.data);
        };
        fetchReviews();
    }, []);
    return (
        <div className="my-3">
            <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={2000}>
                {allReviews.map((review, index) => (
                    <Review key={index} review={review} />
                ))}
            </Carousel>
        </div>
    );
};

export default Reviews;
