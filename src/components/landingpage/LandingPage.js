import React, { Component } from 'react';
import './LandingPage.css'; // CSS file for styling

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1 className="app-name">learnit</h1>
        <div className="loading-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
