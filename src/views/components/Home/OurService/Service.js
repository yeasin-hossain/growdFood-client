/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

function Service({ item }) {
    const { imageUrl, name, price, description, _id: id, stock, type } = item;

    const calc = (x, y) => [
        -(y - window.innerHeight / 2) / 20,
        (x - window.innerWidth / 2) / 20,
        1.1,
    ];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 1, tension: 350, friction: 40 },
    }));

    return (
        <div className="p-1 bg-warning m-3 rounded shadow">
            <div
                className="card"
                style={{ width: '18rem', minHeight: '400px', maxHeight: '400px' }}
            >
                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <img
                        src={imageUrl}
                        className="card-img-top rounded"
                        style={{ height: '150px' }}
                        alt="..."
                    />
                </animated.div>

                <div className="card-body">
                    <h5 className="card-title">
                        {name} <small>({type})</small>
                    </h5>
                    <h5 className="card-title">
                        ৳{price} <small>Per Person</small>
                    </h5>
                    <p className="card-text">{description.substring(0, 120)}...</p>
                    {stock ? (
                        <Link to={`/checkout/${id}`}>
                            <button className="btn btn-warning shadow" type="button">
                                Order Now
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-danger shadow" disabled type="button">
                            Out Of Stock
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Service;
