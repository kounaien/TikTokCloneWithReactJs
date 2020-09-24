
import React, { useRef, useState } from 'react';
import './Video.css';


function Video() {
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };
    return (
        

        <div>
            <video 
            className="video__player"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src="sample-movie.mp4"></video>
        </div>
    );
}

export default Video;
