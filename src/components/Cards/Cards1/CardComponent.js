// CardComponent.js
import React from 'react';
import './CardComponent.css'; // Import your CSS file

const CardComponent = () => {
  return (
    <div className="card-1">
      <div className="desc-1">
        <h1>Enjoy on your TV.</h1>
        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
      </div>
      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Netflix TV" />
      <video className="video-1" autoPlay playsInline muted loop>
        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
      </video>
    </div>
  );
};

export default CardComponent;