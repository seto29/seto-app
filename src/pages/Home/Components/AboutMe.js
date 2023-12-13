// AboutMe.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './Component.css'; // Import your CSS file for styling

const ContactLink = ({ href, icon, text }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </a>
  </li>
);

const AboutMe = () => (
  <div className="about-me">
    <h2>About Me</h2>
    <p className="info">Name: Pratama Wijaya Batara Batoarung</p>
    <p className="info">Nationality: Indonesian</p>

    <p className="info">Roles:</p>
    <div className="role-list">
      <ul>
        <li>Technical Consultant</li>
        <li>Software Developer</li>
        <li>Fullstack Developer</li>
      </ul>
    </div>

    <p className="info">Contact</p>
    <div className="contact-info">
      <ul>
        <ContactLink
          href="https://instagram.com/setowii?igshid=MmVlMjlkMTBhMg%3D%3D&utm_source=qr"
          icon={faInstagram}
          text="@setowii"
        />
        <ContactLink
          href="https://www.linkedin.com/in/pwbbatoarung/"
          icon={faLinkedin}
          text="Pratama Wijaya Batara Batoarung"
        />
        <ContactLink
          href="https://wa.me/85511458897"
          icon={faWhatsapp}
          text="+855 1145 8897"
        />
        <ContactLink
          href="https://t.me/@setowii"
          icon={faTelegram}
          text="@setowii"
        />
      </ul>
    </div>
  </div>
);

export default AboutMe;
