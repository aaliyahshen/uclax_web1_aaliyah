import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    return (
    <FooterStyled>
        <img src='/img/Footer/footer.jpg'></img>
        Teenline&copy; 2021
    </FooterStyled>
    )
}

export default Footer; 

const FooterStyled = styled.footer`
    background-color: #0C0A0B;
    color: white;
    padding: 10px; 
    text-align: center; 
`;