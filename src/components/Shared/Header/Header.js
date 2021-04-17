import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import HeaderSlider from '../HeaderSlider/HeaderSlider';

const Header = () => {
    return (
        <div>
            <HeaderSlider></HeaderSlider>
            <HeaderInfo></HeaderInfo>
        </div>
    );
};

export default Header;