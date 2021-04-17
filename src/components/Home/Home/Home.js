import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import LatestMovie from '../LatestMovie/LatestMovie';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Header from '../../Shared/Header/Header';
import OurFeatures from './OurFeatures/OurFeatures';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <LatestMovie></LatestMovie>
            <OurFeatures></OurFeatures>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;