import React from 'react';
import Loader from 'react-loader-spinner';

const spinnerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
};
const Spinner = () => (
    <div style={spinnerStyle}>
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
);

export default Spinner;
