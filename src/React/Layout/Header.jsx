import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
            Teenline
        </HeaderStyled>
    )
}

export default Header; 

const HeaderStyled = styled.header`
    background-color: #F8811A;
    padding: 20px; 
    text-align: justify;
    color: white;
    font-size: 20px;
`;