import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Info from './Info/Info.jsx';
import Map from './Map/Map.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import YoutubePlayer from './Youtube/YoutubePlayer.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <YoutubePlayer />
            <h1>Leave us a message</h1> 

            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <ContactForm />
                </div>
            </div>

        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

    @media ${mediaQueries.mdUp} {
        .row {
            display: flex;
            .col {
                flex: 1; 
            }
        }
    }

    background-color: black;
    color: white;
    padding: 10px;

    
`; 