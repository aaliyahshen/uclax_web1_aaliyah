import React from 'react';
import styled from 'styled-components';

import YouTube from 'react-youtube';

const YoutubePlayer = () => {

    const handleOnReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const opts = {
        height: '780',
        width: '1280',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }



    return (
        <YoutubePlayerStyled className='YoutubePlayer'>
            <h1>Our Teen Talk App </h1>
            <YouTube 
                videoId="vQZAxJTruQ4" 
                opts={opts} 
                onReady={handleOnReady} 
            />
        </YoutubePlayerStyled>
    );
}

export default YoutubePlayer;

const YoutubePlayerStyled = styled.div`
    margin: auto;
    width: 1280px; 
`;