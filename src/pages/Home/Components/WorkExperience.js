// WorkExperience.js
import React from 'react';
import './Component.css'; // Import your CSS file for styling

const ExperienceItem = ({ jobTitle, company, location, date, responsibilities }) => (
  <div className="experience-item">
    <h3>{jobTitle}</h3>
    <p className="subtext">{company} | {location} | {date}</p>
    <ul>
      {responsibilities.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

const ExperienceList = ({ experiences }) => (
  <div className="experience-list">
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
      jobTitle: 'Summer Intern, Fullstack Developer',
      company: 'PT Rahmat Tuhan Lestari (UR)',
      location: 'Bandung',
      date: 'May – July 2021',
      responsibilities: [
        'Integrated UR with open API Shipper.id, Xendit, MobilePulsa, and BCA Bank',
        'Fixed Responsive UI, added Skeleton view on Loading Page',
        'Created Daily Sales Report Email',
        'Added new function for Metric Convert and Image Compress',
      ],
    },
    {
      jobTitle: 'Freelance Full-stack Developer',
      company: 'Code On Top, Bandung',
      location: 'October 2020 – May 2021',
      responsibilities: [
        'Created website for client.',
        'Created database and API for client.',
        'Produced website and API documentation.',
      ],
    },
  ];

  return (
    <div className="about-me">
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default WorkExperience;
