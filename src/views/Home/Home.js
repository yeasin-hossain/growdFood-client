import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import OurService from '../components/Home/OurService/OurService';
import Reviews from '../components/Home/Review/Reviews';
import TodaySpecial from '../components/Home/TodySpecial/TodaySpecial';

function Home() {
    return (
        <div>
            <HeroSection />
            <OurService />
            <TodaySpecial />
            <Reviews />
        </div>
    );
}

export default Home;
