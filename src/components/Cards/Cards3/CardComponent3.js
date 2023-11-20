import React from 'react';
import './CardComponent3.css'; // Import your CSS file

const CardComponent = () => {
  return (
    <div className="card-3">
      <div className="desc-3">
        <h1>Watch everywhere</h1>
        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="Netflix TV" />
      <video className="video-2" autoPlay playsInline muted loop>
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
      </video>
    </div>
  );
};

export default CardComponent;