import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import SpeacialOffers from './SpeacialOffers';
import Comprasion from './Comprasion';
import Review from './Review';
import Cards from './Cards';
import Search from '@/Search/Search';

const Homepage = () => {
    return (
       <div className='mb-28'>
        <Search/>
        <Banner1/>
        <Banner2/>
        <SpeacialOffers/>
        <Comprasion/>
        <Review/>
        <Cards/>

       </div>
    );
};

export default Homepage;