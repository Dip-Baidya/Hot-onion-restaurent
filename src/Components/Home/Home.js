import React from 'react';
import Category from '../Category/Category';
import ChooseUs from '../ChooseUs/ChooseUs';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;