// ProfilePicture.js
import React from 'react';
import ProfileImage from '../../../assets/images/profile-formal.jpg';

const ProfilePicture = () => (
  <div className="profile-picture">
    <img src={ProfileImage} alt="Profile" />
  </div>
);

export default ProfilePicture;