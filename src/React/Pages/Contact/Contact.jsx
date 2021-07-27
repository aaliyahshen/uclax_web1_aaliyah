import React from 'react';
import styled from 'styled-components';

import Info from './Info/Info.jsx';
import Map from './Map/Map.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact Page</h1> 
            <Info />
            <ContactForm />
            <Map />
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;