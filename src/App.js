import React, { useState } from 'react';
import './App.css';
import Tools from './Tools.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className="logo-text">hive</p>
        <button className="profile-button">
          <img src="lavalabprofile.jpg" alt="Profile"/>
        </button>
      </header>
      <p className="motto-text">Connect your favorite tools.</p>
      <div className="tools-container">
        <Tools />
      </div>
      <button className="back-button">Back</button>
      <button className="finish-button">Finish</button>
    </div>
  );
}

export default App;


