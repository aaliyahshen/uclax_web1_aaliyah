import React from 'react';
import styled from 'styled-components';

import Container from './Container.jsx';

const Services = () => {

    return (
        <ServicesStyled className='Services'>
            <img src='/img/Services/shop_banner_1.png'></img>
            <Container />
        </ServicesStyled>
    );
}

export default Services;

const ServicesStyled = styled.div`
    background-color: #002791;



    
`;