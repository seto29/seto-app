// ProfilePage.js
import React from 'react';
import AboutMe from './Components/AboutMe';
import WorkExperience from './Components/WorkExperience';
import ProfilePicture from './Components/ProfilePicture';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const ProfilePage = () => {
  return (
    <Row>
      <Column size="s100 card">
        <Row>
          <Column size="s5 center-inside">
            <ProfilePicture />
          </Column>
          <Column size="s75">
            <AboutMe />
          </Column>
        </Row>
        <Row>
          <Column size="s100">
            <WorkExperience />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default ProfilePage;
