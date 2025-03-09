import React from "react";
import { Link } from "react-router-dom";

const Alerts = () => {
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Real-Time Security Alerts</li>
    </ul>
    
    <h1 className="page-header">
    Real-Time Security Alerts <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default Alerts;
