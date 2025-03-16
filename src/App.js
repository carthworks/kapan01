import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./App.css";
import "./assets/css/app.min.css";

import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";

import EndpointSecurity from "./pages/EndpointSecurity";
import DeviceInventory from "./pages/DeviceInventory";
import DeviceControl from "./pages/DeviceControl";


import ThreatDetection from "./pages/ThreatDetection";
import NetworkSecurity from "./pages/NetworkSecurity";
import Reports from "./pages/Reports";
import ComplianceReports from "./pages/ComplianceReports";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Alerts from "./pages/Alerts";
import OSApplicationSecurity from "./pages/OSApplicationSecurity";
import Logout from "./components/Logout";
import DnsAnalysis from "./pages/DnsAnalysis"
import VulnerabilityTable from "./pages/VulnerabilityTable";

import AIIntegration from "./pages/AIIntegration";
import UserManagement from "./pages/UserManagement";
import Settings from "./pages/Settings";

// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";

import AuthLayout from "./assets/layouts/AuthLayout";
import MainLayout from "./assets/layouts/MainLayout";

function App() {
  return (
    <Router>
      <div id="app" className="app">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
              <Route path="/dashboard/overview" element={<MainLayout><DashboardOverview /></MainLayout>} />
              <Route path="/dashboard/threat-intelligence" element={<MainLayout><Dashboard /></MainLayout>} />
              <Route path="/dashboard/dns-analysis" element={<MainLayout><DnsAnalysis /></MainLayout>} />
              <Route path="/dashboard/settings" element={<MainLayout><Dashboard /></MainLayout>} />

              <Route path="/endpoint-security" element={<MainLayout><EndpointSecurity /></MainLayout>} />
              <Route path="/endpoint-security/deviceinventory" element={<MainLayout><DeviceInventory /></MainLayout>} />
              <Route path="/endpoint-security/devicecontrol" element={<MainLayout><DeviceControl /></MainLayout>} />
              
              <Route path="/threat-detection" element={<MainLayout><ThreatDetection /></MainLayout>} />
              <Route path="/network-security" element={<MainLayout><NetworkSecurity /></MainLayout>} />

              <Route path="/osapplication-security"  element={<MainLayout><OSApplicationSecurity /></MainLayout>} />
              <Route path="/osapplication-security/appvulner"  element={<MainLayout><VulnerabilityTable /></MainLayout>} />
              
              <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
              <Route path="/reports/compliance" element={<MainLayout><ComplianceReports /></MainLayout>} />

              <Route path="/ai-integration" element={<MainLayout><AIIntegration /></MainLayout>} />
              <Route path="/alerts" element={<MainLayout><Alerts /></MainLayout>} />
              <Route path="/user-management" element={<MainLayout><UserManagement /></MainLayout>} />
              <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />

              <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
              <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
              <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
              <Route path="/logout" element={<AuthLayout><Logout /></AuthLayout>} /> {/* Logout Route */}

              <Route path="*" element={<AuthLayout><Login /></AuthLayout>} />
            </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
