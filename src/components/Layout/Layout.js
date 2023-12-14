import React from 'react';
import NavBar from './NavBar/NavBar'; // Import your NavBar component
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <div className='content'>
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
