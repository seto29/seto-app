// ProfilePage.js
import React from 'react';
import AboutMe from './Components/AboutMe';
import WorkExperience from './Components/WorkExperience';
import ProfilePicture from './Components/ProfilePicture';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Card from '../../components/Card/Card';

const ProfilePage = () => {
  return (
    <Row>
      <Column >
        <Row>
          <Column >
            <ProfilePicture />
          </Column>
          <Column cname="column f3">
            <Card>
              <AboutMe />
            </Card>
          </Column>
        </Row>
        <Row>
          <Column>
            <Card>
              <WorkExperience />
            </Card>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default ProfilePage;
