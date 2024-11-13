import React from 'react';
import './ProfileSection.css';
import profilePic from '../assets/profile.jpg'; // Replace with the path to your profile image

const ProfileSection = () => {
  return (
    <section className="profile-section">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="bio">
        <h2>Reito Kano</h2>
        <h3>A Bit About Me</h3>
        <p>
          I am an ACCA candidate graduating at Monash University. I specialize in accounnting and finance. My interests are in python, web development as well.
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
