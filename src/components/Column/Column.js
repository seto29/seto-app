// Column.js
import React from 'react';
import './Column.css'

const Column = ({ cname, children }) => {
    return <div className={cname??"column"}>{children}</div>;
};

export default Column;