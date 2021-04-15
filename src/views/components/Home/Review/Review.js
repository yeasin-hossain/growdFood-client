import React from 'react';

function Review({ review }) {
    const { fullName, review: clientReview } = review;
    return (
        <div>
            <div className="card">
                <div className="card-header">{fullName}</div>
                <div className="card-body">
                    <h5 className="card-title">Our Honorable Client Said</h5>
                    <p className="card-text">{clientReview}</p>
                </div>
            </div>
        </div>
    );
}

export default Review;
