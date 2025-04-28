import React, { useEffect, useState } from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import html2canvas from "html2canvas";
import PenetrationTestingReport  from "./PenetrationTestingReport";
import { Tabs, Tab } from "react-bootstrap";
import apiService from "../apiService"; 



const vulnerabilities = [
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
  ];
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
  
const exportPDF = () => {
  const doc = new jsPDF();
  doc.text("Penetration Testing Report", 20, 10);
  autoTable(doc, {
    head: [["Vulnerability", "Severity", "CVE", "Recommendation", "Remedy"]],
    body: vulnerabilities.map(v => [v.name, v.severity, v.cve, v.recommendation, v.remedy]),
  });
  doc.save("Penetration_Testing_Report.pdf");
};

const exportExcel = () => {
  const ws = XLSX.utils.json_to_sheet(vulnerabilities);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Vulnerabilities");
  XLSX.writeFile(wb, "Penetration_Testing_Report.xlsx");
};

const exportPNG = () => {
  html2canvas(document.getElementById("report-table")).then(canvas => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "Penetration_Testing_Report.png";
    link.click();
  });
};

const PenetrationTest = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [showreportTable, setShowReportTable] = React.useState(false);
  const [reportData1, setReportData] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const data = await apiService.get("penetration-test-report", { clientId: 123 });
        setReportData(data);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, []);

  return (
    <div id="content" className="app-content">
    <div className="container mt-4">
      <h2 className="mb-3 my-2">Penetration Testing Dashboard</h2>
      <Tabs
        defaultActiveKey="vulnerabilities"
        id="penetration-test-tabs"
      className="mb-3"
      fill
      >
        <Tab eventKey="vulnerabilities" title="Vulnerabilities Table">
          <Table striped bordered hover id="report-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Vulnerability</th>
                <th>Severity</th>
                <th>CVE</th>
                <th>Recommendation</th>
                <th>Remedy</th>
              </tr>
            </thead>
            <tbody>
              {vulnerabilities.map((v, index) => (
                <tr key={v.id}>
                  <td>{index + 1}</td>
                  <td>{v.name}</td>
                  <td>
                    <Badge
                      variant={
                        v.severity === "Critical"
                          ? "danger"
                          : v.severity === "High"
                          ? "warning"
                          : "info"
                      }
                    >
                      {v.severity}
                    </Badge>
                  </td>
                  <td>{v.cve}</td>
                  <td>{v.recommendation}</td>
                  <td>{v.remedy}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="penetrationReport" title="Penetration Testing Report">
          <PenetrationTestingReport reportData={reportData} />
        </Tab>
      </Tabs>
    </div>
    </div>
  );
};

export default PenetrationTest;
