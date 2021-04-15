import React from 'react';
import heroImg from '../../../Images/herosection.svg';

function HeroSection() {
    return (
        <div className="bg-warning p-3">
            <img
                className="img-fluid d-block m-auto"
                style={{ height: '400px' }}
                src={heroImg}
                alt=""
            />
        </div>
    );
}

export default HeroSection;
