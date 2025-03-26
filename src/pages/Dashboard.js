import React from "react";
// import {  Link } from "react-router-dom";
import DashboardOverview from "./DashboardOverview";
import PenetrationTestingDashboard from "./PenetrationTestingDashboard";
import PenetrationTest from "./PenetrationTest";
import { Tabs, Tab } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Tabs defaultActiveKey="overview" id="dashboard-tabs" className="mb-3">
      <Tab eventKey="overview" title="Overview">
        <DashboardOverview />
      </Tab>
      <Tab eventKey="penetration-testing-dashboard" title="Penetration Testing Dashboard">
        <PenetrationTestingDashboard />
      </Tab>
      <Tab eventKey="penetration-test" title="Penetration Test">
        <PenetrationTest />
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
