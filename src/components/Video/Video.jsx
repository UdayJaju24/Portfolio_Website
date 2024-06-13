import React from 'react';

const Video = ({ url, onCloseVideo }) => {
  return (
    <div className="video-container">
      <span className="close-button" onClick={onCloseVideo}>
        
      </span>
      <video controls controlsList="nodownload" width="80%">
        <source src={url} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default Video;
