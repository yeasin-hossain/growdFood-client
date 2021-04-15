import React from 'react';

function Service({ item }) {
    const { imageUrl, name, price, description } = item;
    return (
        <div className="p-1 bg-warning m-3 rounded">
            <div
                className="card"
                style={{ width: '18rem', minHeight: '400px', maxHeight: '400px' }}
            >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">৳{price}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-warning " type="button">
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Service;
