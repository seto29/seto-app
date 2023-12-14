import React from 'react';
import ProfileImage from '../../../assets/images/profile-formal.jpg';
import './Component.css';

const ProfilePicture = () => (
  <div className="profile-picture-container">
    <img className="profile-image" src={ProfileImage} alt="Profile" />
  </div>
);

export default ProfilePicture;
