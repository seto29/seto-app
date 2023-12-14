// WorkExperience.js
import React from 'react';

const ExperienceItem = ({ jobTitle, company, location, date, responsibilities }) => (
  <div >
    <h3>{jobTitle}</h3>
    <p >{company} | {location} | {date}</p>
    <ul>
      {responsibilities.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

const ExperienceList = ({ experiences }) => (
  <div >
    <h2>Work Experience</h2>
    {experiences.map((experience, index) => (
      <ExperienceItem key={index} {...experience} />
    ))}
  </div>
);

const WorkExperience = () => {
  const experiences = [
    {
      jobTitle: 'Technical Consultant',
      company: 'UMG Cambodia Co. ,Ltd.',
      location: 'Phnom Penh',
      date: 'July 2022',
      responsibilities: [
        'Developed API',
        'Developed Mobile App',
        'Developed ODOO Customize Module',
        'Maintained All above.',
        'Created a software design based on user requirements',
      ],
    },
    {
      jobTitle: 'Fullstack Developer',
      company: 'PT Rahmat Tuhan Lestari (UR)',
      location: 'Bandung',
      date: 'January 2020 – January 2022',
      responsibilities: [
        'Developed and deployed website.',
        'Developed API.',
        'Produced website and API documentation.',
        'Collaborated to create a software design based on user and stakeholder requirements.',
      ],
    },
    {
      jobTitle: 'Freelance Full-stack Developer',
      company: 'Code On Top',
      location: 'Bandung',
      date: 'October 2020 – May 2021',
      responsibilities: [
        'Created website for client.',
        'Created database and API for client.',
        'Produced website and API documentation.',
      ],
    },
  ];

  return (
    <div>
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default WorkExperience;
