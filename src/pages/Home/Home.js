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
      <Column >
        <Row>
          <Column >
            <ProfilePicture />
          </Column>
          <Column cname="column f2">
            <AboutMe />
          </Column>
        </Row>
        <Row>
          <Column>
            <WorkExperience />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default ProfilePage;
