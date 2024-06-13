import React, { useState } from 'react';

const VideoButton = ({ url, onClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const buttonStyle = {
    backgroundColor: '#007BFF', // Change the background color as needed
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const handleClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      onClick(null); // Close the video by passing null to the onClick callback
    } else {
      setIsPlaying(true);
      onClick(url); // Play the video by passing the URL to the onClick callback
    }
  };

  return (
    <div className="video-button">
      <button style={buttonStyle} onClick={handleClick}>
        {isPlaying ? 'Close' : 'Play Video'}
      </button>
    </div>
  );
};

export default VideoButton;
