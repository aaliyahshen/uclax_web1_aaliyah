import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {

    return (
        <ContactFormStyled className='ContactForm'>
            ContactForm
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
    background-color: pink;

    @media (min-width: 800px){
        background-color: orange;
    }
`;