import React from "react";
import {  Link } from "react-router-dom";
const AIIntegration = () => {
  // return <h2>AI-Powered Security Automation</h2>;
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link href="#">Home</Link></li>
      <li className="breadcrumb-item active">dashboard</li>
    </ul>
    
    <h1 className="page-header">
    AI-Powered Security Automation <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default AIIntegration;
