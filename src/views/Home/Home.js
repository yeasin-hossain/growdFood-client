import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
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
            <NewsLetter />
        </div>
    );
}

export default Home;
