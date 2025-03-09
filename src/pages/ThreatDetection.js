import React from "react";
import { Link } from "react-router-dom";

const ThreatDetection = () => {
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Threat Detection & Response</li>
    </ul>
    
    <h1 className="page-header">
    Threat Detection & Response <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default ThreatDetection;
