import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/app.min.css";

import Dashboard from "./pages/Dashboard";
import DashboardOverview from "./pages/DashboardOverview";
import EndpointSecurity from "./pages/EndpointSecurity";
import DeviceInventory from "./pages/DeviceInventory";
import VulnerabilityScanner from "./pages/VulnerabilityScanner";
import DeviceControl from "./pages/DeviceControl";
import NetworkControl from "./pages/NetworkControl";


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

// import Settings from "./pages/Settings";
// import Header from "./components/Header";
import Footer from "./components/Footer";

import AuthLayout from "./assets/layouts/AuthLayout";
import MainLayout from "./assets/layouts/MainLayout";
import NotFound from "./components/NotFound";
// import Sidebar from "./components/Sidebar";
import PenetrationTestingReport from "./pages/PenetrationTestingReport";
import DashboardMain  from "./pages/DashboardMain";


function App() {
  const reportData  = {
    clientName: "ABC Corp",
    reportDate: "2025-03-26",
    testPeriod: "March 1 - March 10, 2025",
    testingTeam: "CyberSec Experts",
    preparedBy: "John Doe",
    overview: "A comprehensive penetration test was conducted on the client's web application...",
    totalVulnerabilities: 10,
    criticalVulnerabilities: 2,
    highRiskVulnerabilities: 3,
    mediumRiskVulnerabilities: 3,
    lowRiskVulnerabilities: 2,
    systemsTested: ["Web Application, API, Internal Network"],
    testingMethodologies: ["Black Box, Grey Box, OWASP Top 10 Analysis"],
    complianceStandards: ["ISO 27001, NIST, GDPR"],
    vulnerabilities: [
      {
        name: "SQL Injection",
        severity: "Critical",
        cve: "CVE-2021-12345",
        recommendation: "Use parameterized queries to prevent SQL injection.",
        remedy: "Update database queries to use prepared statements."
      },
      {
        name: "Cross-Site Scripting (XSS)",
        severity: "High",
        cve: "CVE-2021-54321",
        recommendation: "Sanitize user inputs and implement Content Security Policy (CSP).",
        remedy: "Use input validation libraries and enforce security headers."
      },
      {
        id: 1,
        name: "SQL Injection",
        cve: "CVE-2022-1234",
        severity: "Critical",
        recommendation: "Use prepared statements and parameterized queries.",
        remedy: "Implement input validation and escape user inputs properly."
      },
      {
        id: 2,
        name: "Cross-Site Scripting (XSS)",
        cve: "CVE-2021-5678",
        severity: "High",
        recommendation: "Sanitize user input and implement Content Security Policy (CSP).",
        remedy: "Use frameworks that auto-escape outputs, like React or Angular."
      },
      {
        id: 3,
        name: "Insecure Direct Object References (IDOR)",
        cve: "CVE-2023-2345",
        severity: "High",
        recommendation: "Use access control mechanisms and validate user permissions.",
        remedy: "Implement proper authorization checks before serving data."
      },
      {
        id: 4,
        name: "Broken Authentication",
        cve: "CVE-2020-8765",
        severity: "Critical",
        recommendation: "Implement multi-factor authentication (MFA) and strong password policies.",
        remedy: "Use secure session management and limit session lifetimes."
      },
      {
        id: 5,
        name: "Security Misconfiguration",
        cve: "CVE-2019-4321",
        severity: "Medium",
        recommendation: "Follow security best practices for server and app configurations.",
        remedy: "Disable unnecessary services and secure error messages."
      },
      {
        id: 6,
        name: "Cross-Site Request Forgery (CSRF)",
        cve: "CVE-2023-3456",
        severity: "High",
        recommendation: "Use anti-CSRF tokens and enforce same-site cookie policies.",
        remedy: "Implement secure authentication flows with proper token validation."
      },
      {
        id: 7,
        name: "Unvalidated Redirects and Forwards",
        cve: "CVE-2022-9876",
        severity: "Medium",
        recommendation: "Restrict URL redirects to trusted destinations.",
        remedy: "Validate all redirect parameters and use allowlists."
      },
      {
        id: 8,
        name: "Insecure Deserialization",
        cve: "CVE-2020-1357",
        severity: "High",
        recommendation: "Use safe serialization formats like JSON instead of binary.",
        remedy: "Restrict deserialization of untrusted data."
      },
      {
        id: 9,
        name: "Sensitive Data Exposure",
        cve: "CVE-2021-4532",
        severity: "Critical",
        recommendation: "Use encryption for sensitive data at rest and in transit.",
        remedy: "Mask sensitive data and follow secure storage guidelines."
      },
      {
        id: 10,
        name: "Weak Password Storage",
        cve: "CVE-2018-6543",
        severity: "High",
        recommendation: "Use strong hashing algorithms like bcrypt or Argon2.",
        remedy: "Enforce password strength policies and periodic rotations."
      },
      {
        id: 11,
        name: "Improper Error Handling",
        cve: "CVE-2023-7789",
        severity: "Medium",
        recommendation: "Avoid exposing detailed error messages to users.",
        remedy: "Log errors securely and use generic user-friendly messages."
      },
      {
        id: 12,
        name: "Lack of Rate Limiting",
        cve: "CVE-2021-9012",
        severity: "High",
        recommendation: "Implement rate limiting on authentication and API endpoints.",
        remedy: "Use tools like Redis-based throttling and request monitoring."
      },
      {
        id: 13,
        name: "Clickjacking",
        cve: "CVE-2020-2222",
        severity: "Medium",
        recommendation: "Use X-Frame-Options and CSP to prevent framing.",
        remedy: "Disable iframe embedding where not needed."
      },
      {
        id: 14,
        name: "Insufficient Logging & Monitoring",
        cve: "CVE-2022-4567",
        severity: "Medium",
        recommendation: "Implement centralized logging and alerting mechanisms.",
        remedy: "Use SIEM tools and detect anomalies early."
      },
      {
        id: 15,
        name: "Outdated Components with Known Vulnerabilities",
        cve: "CVE-2019-7654",
        severity: "High",
        recommendation: "Regularly update software dependencies and libraries.",
        remedy: "Use automated tools to track and update outdated components."
      }
    ]
  };
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
              <Route path="/endpoint-security/34" element={<MainLayout><VulnerabilityScanner /></MainLayout>} />

              <Route path="/endpoint-security/devicecontrol" element={<MainLayout><DeviceControl /></MainLayout>} />
              <Route path="/endpoint-security/networkcontrol" element={<MainLayout><NetworkControl /></MainLayout>} />
             
             
              <Route path="/threat-detection" element={<MainLayout><ThreatDetection /></MainLayout>} />
              <Route path="/network-security" element={<MainLayout><NetworkSecurity /></MainLayout>} />

              <Route path="/osapplication-security"  element={<MainLayout><OSApplicationSecurity /></MainLayout>} />
              <Route path="/osapplication-security/appvulner"  element={<MainLayout><VulnerabilityTable /></MainLayout>} />
              
              <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
              <Route path="/reports/compliance" element={<MainLayout><ComplianceReports /></MainLayout>} />

              <Route path="/ai-integration" element={<MainLayout><AIIntegration /></MainLayout>} />
              <Route path="/alerts" element={<MainLayout><Alerts /></MainLayout>} />
              
              <Route path="/user-management" element={<MainLayout><UserManagement /></MainLayout>} />
              <Route path="/user-management/userrole" element={<MainLayout><UserRole /></MainLayout>} />
             <Route path="/user-management/access-control" element={<MainLayout><UserAccessControl /></MainLayout>} />
             <Route path="/user-management/role-based-permissions" element={<MainLayout><RoleBasedPermissions /></MainLayout>} />
             <Route path="/user-management/multi-tenant-support" element={<MainLayout><MultiTenantSupport /></MainLayout>} />
              {/* <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} /> */}

              <Route path="/" element={<AuthLayout><Login /></AuthLayout>} />
              <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
              <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
              <Route path="/logout" element={<AuthLayout><Logout /></AuthLayout>} /> {/* Logout Route */}
              <Route path="/penetration-testing-report" element={<MainLayout> <PenetrationTestingReport reportData={reportData} /></MainLayout>} />
              {/* <Route path="*" element={<AuthLayout><Login /></AuthLayout>} /> */}
              <Route path="*" element={<NotFound />} />
<Route path="/dashboardmain" element={<MainLayout><DashboardMain /></MainLayout>} />
            </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
