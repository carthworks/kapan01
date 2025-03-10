import React from "react";
import {  Link } from "react-router-dom";

const NetworkSecurity = () => {
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">network security</li>
    </ul>
    
    <h1 className="page-header">
    Network Security <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default NetworkSecurity;
