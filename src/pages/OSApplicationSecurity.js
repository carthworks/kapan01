import React from "react";
import { Link } from "react-router-dom";

const OSApplicationSecurity = () => {
  // return <h2>OS & Application Security Overview</h2>;
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">OSApplicationSecurity</li>
    </ul>
    
    <h1 className="page-header">
    OS & Application Security Overview <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default OSApplicationSecurity;
