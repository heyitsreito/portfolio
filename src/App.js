import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import SectionLinks from './components/SectionLinks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ProfileSection />
      <SectionLinks />
      <Footer />
    </div>
  );
}

export default App;
