import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

/* Scripts ---------------------------*/
import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

const Nav = () => {
    return (
        <NavStyled>
            <NavLink to="/" exact>Welcome</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/services">Shop</NavLink>    
        </NavStyled>
    )
}

export default Nav; 

const NavStyled = styled.nav`
    background-color: #000000;
    padding: 10px;
    text-align: center;

    a {
        display: block;
        color: white;
        padding: 10px; 
        border-radius: 5px; 
        margin: 5px 0px; 

        text-decoration: none; 

        &:hover {
            color: #000000;
            background-color: white;
        } 

        &.active {
            color: #000000;
            background-color: #ffffff;
        }
    }

    @media ${mediaQueries.mdUp} {
        a {
            display: inline-block;
            margin: 0px 20px; 
            font-size: 20px;
            border-radius: 5px; 
        }
    }
`;