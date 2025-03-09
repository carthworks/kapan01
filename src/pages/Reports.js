import React from "react";
import { Link } from "react-router-dom";
const Reports = () => {
  // return <h2>Security Reports & Analytics</h2>;
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Security Reports & Analytics</li>
    </ul>
    
    <h1 className="page-header">
    Security Reports & Analytics <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default Reports;
