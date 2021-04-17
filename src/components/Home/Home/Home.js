import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import LatestMovie from '../LatestMovie/LatestMovie';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <LatestMovie></LatestMovie>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;