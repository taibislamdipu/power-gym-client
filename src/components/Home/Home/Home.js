import React from 'react';
import MainHeader from '../../MainHeader/MainHeader';
import AboutUs from './AboutUs/AboutUs';
import MotivateCard from './MotivateCard/MotivateCard';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <MotivateCard></MotivateCard>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;