import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>HELLO</h1>
      <h1>MY NAME IS DHEDY</h1>
      <p>React Native Developer</p>
    </div>
  );
}

export default HeroSection;
