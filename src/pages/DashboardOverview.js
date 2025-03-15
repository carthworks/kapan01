import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";
// import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
// import Grid2 from '@mui/material/Grid2';

// import { LineChart, Line, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar } from "recharts";
// import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {  Link } from "react-router-dom";

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
  const securityScoreData = [{ name: "Security Score", score: 75 }];

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

  return (
    <div id="content" className="app-content">
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item active">Dashboard Over view</li>
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
    </div>
  );
};

export default DashboardOverview;
