import React, { useEffect }from 'react';
import styled from 'styled-components';

import Light from './Light.jsx';

const Dark = ({showLightUpdate, children, width}) => {

    useEffect(() => {
        const handeOnKeyDown = (event) => {
        
            if (event.keyCode === 27) {
                showLightUpdate(false);
            }
        }

        document.addEventListener("keydown", handeOnKeyDown, false);

        return () => {
            document.removeEventListener("keydown", handeOnKeyDown, false);
        }

    }, []);

    return (
        <DarkStyled className='Dark'>
            <Light showLightUpdate={ showLightUpdate } width={ width }> 
                { children }
            </Light>
        </DarkStyled>
    );
}

export default Dark;

const DarkStyled = styled.div`
    position: fixed;

    z-index: 1000; 
    
    background-color: rgba(0, 0, 0, 0.722);

    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    
`;