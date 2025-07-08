
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/app.min.css";
import { Toaster } from "./components/ui/sonner";

import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";
import EndpointSecurity from "./pages/EndpointSecurity";
import DeviceInventory from "./pages/DeviceInventory";
import VulnerabilityScanner from "./pages/VulnerabilityScanner";
import DeviceControl from "./pages/DeviceControl";
import NetworkControl from "./pages/NetworkControl";

// Import new pages
import NotFound from "./components/NotFound";
import AccessForbidden from "./pages/AccessForbidden";
import SecurityIncidentResponse from "./pages/SecurityIncidentResponse";
import ThreatHunting from "./pages/ThreatHunting";
import SecurityAuditLog from "./pages/SecurityAuditLog";

// Existing imports
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
import UserRole from "./pages/UserRole";
import UserAccessControl from "./pages/UserAccessControl";
import RoleBasedPermissions from "./pages/RoleBasedPermissions";
import MultiTenantSupport from "./pages/MultiTenantSupport";

import Footer from "./components/Footer";

import AuthLayout from "./assets/layouts/AuthLayout";
import MainLayout from "./assets/layouts/MainLayout";
import PenetrationTestingReport from "./pages/PenetrationTestingReport";
import DashboardMain from "./pages/DashboardMain";

function App() {
  // Sample data for the penetration testing report
  const reportData = {
    // Your report data here
  };

  return (
    <Router>
      <div id="app" className="app">
        <Routes>
          {/* Auth routes */}
          <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
          <Route path="/logout" element={<AuthLayout><Logout /></AuthLayout>} /> {/* Logout Route */}
          <Route path="/penetration-testing-report" element={<MainLayout> <PenetrationTestingReport reportData={reportData} /></MainLayout>} />
          {/* <Route path="*" element={<AuthLayout><Login /></AuthLayout>} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboardmain" element={<MainLayout><DashboardMain /></MainLayout>} />
          <Route path="/dashboard" element={<MainLayout><DashboardMain /></MainLayout>} />
          <Route path="/dashboard/overview" element={<MainLayout><DashboardOverview /></MainLayout>} />
          <Route path="/dashboard/dns-analysis" element={<MainLayout><DnsAnalysis /></MainLayout>} />
          <Route path="/dashboard/threat-intelligence" element={<MainLayout><ThreatHunting /></MainLayout>} />
          <Route path="/dashboard/incident-summary" element={<MainLayout><SecurityIncidentResponse /></MainLayout>} />
          <Route path="/dashboard/security-score" element={<MainLayout><SecurityAuditLog /></MainLayout>} />
          <Route path="/endpoint-security" element={<MainLayout><EndpointSecurity /></MainLayout>} />
          <Route path="/endpoint-security/deviceinventory" element={<MainLayout><DeviceInventory /></MainLayout>} />

          {/* User & Role Management routes */}
          <Route path="/user-management" element={<MainLayout><UserManagement /></MainLayout>} />
          <Route path="/user-role" element={<MainLayout><UserRole /></MainLayout>} />
          <Route path="/user-access-control" element={<MainLayout><UserAccessControl /></MainLayout>} />
          <Route path="/role-based-permissions" element={<MainLayout><RoleBasedPermissions /></MainLayout>} />
          <Route path="/multi-tenant-support" element={<MainLayout><MultiTenantSupport /></MainLayout>} />

          {/* Additional missing routes */}
          <Route path="/threat-detection" element={<MainLayout><ThreatHunting /></MainLayout>} />
          <Route path="/vulnerabilityscanner" element={<MainLayout><VulnerabilityScanner /></MainLayout>} />
          <Route path="/devicecontrol" element={<MainLayout><DeviceControl /></MainLayout>} />
          <Route path="/networkcontrol" element={<MainLayout><NetworkControl /></MainLayout>} />
          <Route path="/network-security" element={<MainLayout><NetworkSecurity /></MainLayout>} />
          <Route path="/osapplication-security" element={<MainLayout><OSApplicationSecurity /></MainLayout>} />
          <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/reports/compliance" element={<MainLayout><ComplianceReports /></MainLayout>} />
          <Route path="/ai-integration" element={<MainLayout><AIIntegration /></MainLayout>} />
          <Route path="/vulnerability-table" element={<MainLayout><VulnerabilityTable /></MainLayout>} />
          <Route path="/access-forbidden" element={<MainLayout><AccessForbidden /></MainLayout>} />
          <Route path="/threat-detection" element={<MainLayout><ThreatDetection /></MainLayout>} />
          <Route path="/network-security" element={<MainLayout><NetworkSecurity /></MainLayout>} />
          <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
          <Route path="/reports/compliance" element={<MainLayout><ComplianceReports /></MainLayout>} />
          <Route path="/osapplication-security" element={<MainLayout><OSApplicationSecurity /></MainLayout>} />
          <Route path="/vulnerabilityscanner" element={<MainLayout><VulnerabilityScanner /></MainLayout>} />
          <Route path="/devicecontrol" element={<MainLayout><DeviceControl /></MainLayout>} />
          <Route path="/networkcontrol" element={<MainLayout><NetworkControl /></MainLayout>} />


        </Routes>

        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
