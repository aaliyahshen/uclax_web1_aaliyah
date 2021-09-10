import React from 'react';
import styled from 'styled-components';

const Content = ({chosenTab}) => {

    return (
        <ContentStyled className='Content'>
            <div className="image">
                <img src={ chosenTab.image } alt="{ chosenTab.image }" />
            </div>
            <div className="info">
                <div dangerouslySetInnerHTML={ { __html: chosenTab.text }} />
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    padding: 40px; 
    background-color: #0B349C;
    min-height: 200px; 
    
    display: flex;

    .image {
        flex: 1;
        img {
            max-width: 1200px; 
        }
    }

    .info {
        flex: 4;
        padding: 0px 20px; 
    }
`;