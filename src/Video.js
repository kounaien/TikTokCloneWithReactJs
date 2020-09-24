
import React, { useRef } from 'react';
import './Video.css';


function Video() {
    const videoRef = useRef(null);
    const onVideoPress = () => {
        videoRef.current.play();
    };
    return (
        

        <div>
            <video 
            className="video__player"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src=""></video>
        </div>
    );
}

export default Video;
