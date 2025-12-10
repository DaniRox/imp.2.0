import React from 'react';

const VideoPlayer = ({ src, width = 100%, height = "auto", controls = true, loop = true, autoPlay = true, muted = true }) => {
    return (
        <div className="video-container">
            <video
                width={width}
                height={height}
                controls={controls}
                loop={loop}
                autoPlay={autoPlay}
                muted={muted}
            >
                <source src={src} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>
    );
};

export default VideoPlayer;
