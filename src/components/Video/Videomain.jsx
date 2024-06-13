import React, { useState } from 'react';
import Video from './Video';
import VideoButton from './VideoButton';

const Videomain = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <div>
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/What%20is%20COCOMO%20Model_%20_%20Software%20Engineering.mp4?alt=media&token=7402e98d-4a9a-4a0c-8564-8251c998f604&_gl=1*1tqowu9*_ga*MjEyNzM1NDk3LjE2OTc3MTQ2MTA.*_ga_CW55HF8NVT*MTY5Nzc3MTYxMS41LjEuMTY5Nzc3MTczNS41OC4wLjA." onClick={handleVideoClick} />
      <br></br>
      <br></br>
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/waterfall%20model%20in%20software%20engineering%20_%20Learn%20Coding.mp4?alt=media&token=f8d3c076-9d6a-4d59-81e4-60ef96e7d0f2&_gl=1*jmw30f*_ga*MjEyNzM1NDk3LjE2OTc3MTQ2MTA.*_ga_CW55HF8NVT*MTY5Nzc3NTU0NC42LjEuMTY5Nzc3NjM1OC41NS4wLjA." onClick={handleVideoClick} />
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/Artificial%20Intelligence%20Interview%20Questions%20And%20Answers%20_%20Top%20AI%20Interview%20Tips%20_%20Simplilearn.mp4?alt=media&token=125924e3-ecec-447c-8a20-49a5eb7c86f9" onClick={handleVideoClick} />
      {videoUrl && <Video url={videoUrl} />}
    </div>
  );
};

export default Videomain;
