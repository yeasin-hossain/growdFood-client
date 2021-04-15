import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import OurService from '../components/Home/OurService/OurService';
import TodaySpecial from '../components/Home/TodySpecial/TodaySpecial';

function Home() {
    return (
        <div>
            <HeroSection />
            <OurService />
            <TodaySpecial />
        </div>
    );
}

export default Home;
