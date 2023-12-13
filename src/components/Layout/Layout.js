import React from 'react';
import NavBar from './NavBar'; // Import your NavBar component

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <div className='content'>
      {children}
    </div>
  </div>
);

export default Layout;
