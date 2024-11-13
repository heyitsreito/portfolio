import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="circle"></div>
        <h1>Reito Kano</h1>
        <p className="title">Graduate & ACCA Member @ Monash University</p>
      </div>
      <nav className="header-nav">
        <a href="#resume">Resume</a>
        <span className="divider">|</span>
        <a href="#research">Research</a>
        <span className="divider">|</span>
        <a href="#skills">Skills</a>
        <span className="divider">|</span>
        <a href="#personal">Personal</a>
      </nav>
    </header>
  );
};

export default Header;
