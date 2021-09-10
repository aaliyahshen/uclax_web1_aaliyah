import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'common/mediaQueries/useMediaQuery';

import Lightbox from 'React/Components/Lightbox/Lightbox.jsx';

const Item = ({ service }) => {

    const { media } = useMediaQuery();

    const LightboxContent = () => {
        return (
            <div>
                <img src={ service.image } alt={ service.name } />
                <h3>{ service.title }</h3> 
                <div className="cost">{ service.cost }</div>
                <p>{ service.description }</p>
            </div>
        );
    }

    const width = (media.mdUp) ? '400px' : '200px'; 

    return (
        <ItemStyled className='Item'>
            <Lightbox LightboxContent={ LightboxContent } width={ width }>
                <img src={ service.image } alt={ service.title } />
                <h3>{ service. title }</h3>
            </Lightbox>
        </ItemStyled>
    );
}

export default Item;

const ItemStyled = styled.div`
    img {
        display: block;
        width: 100%;
    }

    h3{
        background-color: #000000;
        color: white;
        padding: 10px; 
        font-size: 18px;
        margin: 0px;
        text-align: center;
    }

    p {
        background: #000000;
        color: white;
        font-size: 16px;
        padding: 10px;
        font-weight: lighter;
    }
    
    div {
        padding: 5px;
    }

`;