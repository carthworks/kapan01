import React from "react";
import { Link } from "react-router-dom";

const EndpointSecurity = () => {
  // return <h2>Endpoint Security Management</h2>;
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">Endpoint Security Management</li>
    </ul>
    
    <h1 className="page-header">
    Endpoint Security Management <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default EndpointSecurity;
