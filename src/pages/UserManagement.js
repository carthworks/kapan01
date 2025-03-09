import React from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  // return <h2>User & Role Management</h2>;
  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">User & Role Management</li>
    </ul>
    
    <h1 className="page-header">
    User & Role Management <small></small>
    </h1>
    
    <p>
      Start here
    </p>
  </div>
  );
};

export default UserManagement;
