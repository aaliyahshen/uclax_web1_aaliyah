import React from 'react';
import styled from 'styled-components';

import Playground from '../../Components/Lightbox/Playground.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';
//import Navigation from '../../Layout/Navigation/Navigation.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>
            <img src='/img/Welcome/landing page1.jpg'></img>
            <Tabbed />
            <img src='/img/Welcome/landing page9.jpg'></img>
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
`;