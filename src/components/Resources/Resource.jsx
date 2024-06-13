import React, { useState } from 'react';
import VideoButton from '../Video/VideoButton';
import Video from '../Video/Video';

const Resource = () => {
  const [videoStates, setVideoStates] = useState({
    "Video 1": { url: null, isOpen: false },
    "Video 2": { url: null, isOpen: false },
  });

  const handleVideoClick = (url, buttonLabel) => {
    const currentVideoState = videoStates[buttonLabel];

    // Toggle video state when the same button is clicked
    if (currentVideoState.isOpen) {
      closeVideo(buttonLabel);
    } else {
      openVideo(url, buttonLabel);
    }
  };

  const openVideo = (url, buttonLabel) => {
    const updatedVideoStates = { ...videoStates };
    updatedVideoStates[buttonLabel] = { url, isOpen: true };
    setVideoStates(updatedVideoStates);
  };

  const closeVideo = (buttonLabel) => {
    const updatedVideoStates = { ...videoStates };
    updatedVideoStates[buttonLabel] = { url: null, isOpen: false };
    setVideoStates(updatedVideoStates);
  };

  return (
    <div>
      <section className="resource section" id="resource">
        <h2 className="section__title">Resource</h2>
        <div className="resource__container container grid">
          <div className="resource__content">
            <h3 className="resource__title">Learn with me</h3>
            <div className="container">
              <VideoButton
                url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/What%20is%20COCOMO%20Model_%20_%20Software%20Engineering.mp4?alt=media&token=7402e98d-4a9a-4a0c-8564-8251c998f604&_gl=1*1tqowu9*_ga*MjEyNzM1NDk7Y*&gl*97qWegj7gH0Yi16xWz0N2ovj%2FMEs5sjl%3Fbim%3F._ga_CW55HF8NVT*MTY5Nzc7LjA."
                onClick={(url) => handleVideoClick(url, "Video 1")}
              />
              {videoStates["Video 1"].isOpen && (
                <Video
                  url={videoStates["Video 1"].url}
                  onCloseVideo={() => closeVideo("Video 1")}
                />
              )}
              <br></br>
              <VideoButton
                url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/waterfall%20model%20in%20software%20engineering%20_%20Learn%20Coding.mp4?alt=media&token=f8d3c076-9d6a-4d59-81e4-60ef96e7d0f2&_gl=1*jmw30f*_ga*MjEyNzM1NDk7Y*&gl*91qM4R9qTl8QIvHqx8Eot%2FXDulGrDSj%3Fbim%3F._ga_CW55HF8NVT*MTY5Nzc7LjA."
                onClick={(url) => handleVideoClick(url, "Video 2")}
              />
              {videoStates["Video 2"].isOpen && (
                <Video
                  url={videoStates["Video 2"].url}
                  onCloseVideo={() => closeVideo("Video 2")}
                />
              )}
              <br></br>
              <br></br>
              <a href="https://rzp.io/i/8KQGvGk" target="_blank" rel="noopener noreferrer">
                Pay
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resource;
