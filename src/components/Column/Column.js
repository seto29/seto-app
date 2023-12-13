// Column.js
import React from 'react';
import './Column.css';

const Column = ({ size, children }) => {
  return <div className={`column ${size}`}>{children}</div>;
};

export default Column;