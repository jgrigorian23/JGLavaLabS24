import React, { useState } from 'react';
import './App.css';
import Tools from './Tools.js';

/* Set alerts for buttons to indicate functionality */
function App() {
  const backClick = () => {
    alert('The back button has been clickified')
  };

  const finishClick = () => {
    alert('The finish button has been clickified')
  };

  const pfpClick = () => {
    alert('The beautiful profile picture has been clickified')
  }

  /* Set up layout of page with header, motto text, tools, back/finish buttons */
  return (
    <div className="App">
      <header className="App-header">
        <p className="logo-text">hive</p>
        <button className="profile-button" onClick={pfpClick}>
          <img src="lavalabprofile.jpg" alt="Profile"/>
        </button>
      </header>
      <p className="motto-text">Connect your favorite tools.</p>
      <div className="tools-container">
        <Tools />
      </div>
      <button className="back-button" onClick={backClick}>Back</button>
      <button className="finish-button" onClick={finishClick}>Finish</button>
    </div>
  );
}

export default App;


