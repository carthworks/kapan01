import React from "react";
import { Link } from "react-router-dom";

const OSApplicationSecurity = () => {
  // return <h2>OS & Application Security Overview</h2>;
  const threatReport = [
    { id: 1, type: "SQL Injection", severity: "High", system: "Web App", status: "Open" },
    { id: 2, type: "Buffer Overflow", severity: "Critical", system: "OS", status: "In Progress" },
    { id: 3, type: "Cross-Site Scripting (XSS)", severity: "Medium", system: "Web App", status: "Resolved" },
  ];

  const handleViewLogs = () => {
    console.log("Fetching security logs...");
    // Fetch logs and show in modal
  };

  const handleScan = () => {
    console.log("Scanning system for vulnerabilities...");
    // Call API or trigger a scan
  };

  const handleViewDetails = (id) => {
    console.log(`View details for threat ID: ${id}`);
    // Fetch details and show in modal
  }
  
  

  return (
    <div id="content" className="app-content">
    <ul className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
      <li className="breadcrumb-item active">OSApplicationSecurity</li>
    </ul>
    
    <h1 className="page-header">
    OS & Application Security Overview <small></small>
    </h1><p>Overview of OS and application-level security threats and best practices.</p>
    
    <div className="container mt-4">
      {/* <h2 className="mb-3">OS & Application Security</h2> */}
      

      {/* Security Metrics */}
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">OS Vulnerabilities</h5>
              <p className="card-text">12 Critical Issues</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Application Vulnerabilities</h5>
              <p className="card-text">8 High-Risk Threats</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Patch Status</h5>
              <p className="card-text">5 Updates Pending</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Compliance Score</h5>
              <p className="card-text">85/100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Report Table */}
      <h4 className="mt-4">Threat Report</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Threat Type</th>
            <th>Severity</th>
            <th>Affected System</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {threatReport.map((threat) => (
            <tr key={threat.id}>
              <td>{threat.id}</td>
              <td>{threat.type}</td>
              <td>{threat.severity}</td>
              <td>{threat.system}</td>
              <td>{threat.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Security Recommendations */}
      <h4 className="mt-4">Security Recommendations</h4>
      <ul>
        <li>Enable multi-factor authentication for all admin accounts.</li>
        <li>Regularly update software to patch vulnerabilities.</li>
        <li>Monitor system logs for unusual activities.</li>
      </ul>

      {/* Security Alerts */}
      <h4 className="mt-4">Recent Security Alerts</h4>
      <ul className="list-group">
        <li className="list-group-item">Critical Windows OS vulnerability detected - Update required.</li>
        <li className="list-group-item">Unpatched Apache server found - Immediate action needed.</li>
      </ul>

      {/* Action Buttons */}
      <div className="mt-4">
        <button className="btn btn-primary me-2" onClick={handleScan}>Run Security Scan</button>
        <button className="btn btn-secondary me-2" onClick={handleViewLogs}>Generate Security Report</button>
        <button className="btn btn-danger" onClick={handleViewDetails}>View Detailed Logs</button>
      </div>
    </div>
  </div>
  );
};

export default OSApplicationSecurity;
