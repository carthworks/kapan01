import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// import Grid2 from '@mui/material/Grid2';

import { LineChart, Line, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar } from "recharts";
// import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {  Link } from "react-router-dom";
// import ThreatTrendsCard from "./ThreatTrendsCard"; // Import the ThreatTrendsCard component

const DashboardOverview = () => {
  // Sample Data for KPI Cards
  const kpiStats = [
    { title: "Active Threats", value: 12, color: "red" },
    { title: "Resolved Incidents", value: 345, color: "green" },
    { title: "Pending Investigations", value: 5, color: "yellow" },
    { title: "Critical Alerts", value: 3, color: "purple" },
  ];

  // Sample Data for Line Chart (Threat Trends)
  const threatData = [
    { date: "Mar 1", threats: 5 },
    { date: "Mar 2", threats: 12 },
    { date: "Mar 3", threats: 7 },
    { date: "Mar 4", threats: 15 },
    { date: "Mar 5", threats: 10 },
  ];

  // Sample Data for Security Score Chart
  const securityScoreData = [{ name: "Security Score", score: 75 },
    { name: "Network Security", score: 85 },
    { name: "Application Security", score: 72 },
    { name: "Endpoint Security", score: 68 },
    { name: "Data Protection", score: 90 }];

  // Sample Data for Recent Security Alerts Table
  const alertData = [
    { id: 1, alert: "Phishing Attempt", severity: "High", sourceIP: "192.168.1.1", time: "10:45 AM", status: "Unresolved" },
    { id: 2, alert: "Malware Detected", severity: "Critical", sourceIP: "10.0.0.5", time: "11:15 AM", status: "Resolved" },
    { id: 3, alert: "Unauthorized Login", severity: "Medium", sourceIP: "172.16.2.8", time: "12:00 PM", status: "Unresolved" },
  ];

  // Column Definitions for AG Grid
  const columns = [
    { headerName: "Alert Name", field: "alert", flex: 1 },
    { headerName: "Severity", field: "severity", flex: 1 },
    { headerName: "Source IP", field: "sourceIP", flex: 1 },
    { headerName: "Time Detected", field: "time", flex: 1 },
    { headerName: "Status", field: "status", flex: 1 },
  ];
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "danger";
      case "High":
        return "warning";
      case "Medium":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <div id="content" className="app-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item active">Dashboard Overview</li>
      </ul>

      <h1 className="page-header">
        DashboardOverview<small></small>
      </h1>

      <div className="row">
        {kpiStats.map((stat, index) => (
          <div key={index} className="col-md-3">
            <div className={`card text-white bg-${stat.color} mb-3`}>
              <div className="card-body">
                <h5 className="card-title">{stat.title}</h5>
                <p className="card-text display-4">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Threat Trends (Last 5 Days)</h6>
              <LineChart width={400} height={200} data={threatData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="threats" stroke="#ff0000" strokeWidth={2} />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="card-title">Security Score</h6>
              <RadialBarChart width={300} height={200} innerRadius="10%" outerRadius="90%" data={securityScoreData}>
                <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background dataKey="score" fill="#8884d8" />
              </RadialBarChart>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h6 className="mb-0">Recent Security Alerts</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Alert</th>
                    <th>Severity</th>
                    <th>Source IP</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {alertData.map((alert) => (
                    <tr key={alert.id}>
                      <td>{alert.id}</td>
                      <td>{alert.alert}</td>
                      <td>
                        <span className={`badge bg-${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td>{alert.sourceIP}</td>
                      <td>{alert.time}</td>
                      <td>
                        <span className={`badge bg-${alert.status === "Resolved" ? "success" : "danger"}`}>
                          {alert.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
