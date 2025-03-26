import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

const PenetrationTestingReport = ({ reportData }) => {
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(10); // Reduce font size
        let y = 20; // Starting Y position
        const lineHeight = 6; // Line height for text
        const pageHeight = doc.internal.pageSize.height; // Page height
        const pageWidth = doc.internal.pageSize.width; // Page width
        const margin = 15; // Margin for text

        const addTextWithPageBreak = (text) => {
            const textLines = doc.splitTextToSize(text, pageWidth - margin * 2); // Word wrap
            textLines.forEach((line) => {
                if (y + lineHeight > pageHeight - margin) {
                    doc.addPage();
                    y = margin; // Reset Y position for new page
                }
                doc.text(line, margin, y);
                y += lineHeight;
            });
        };

        doc.text("Penetration Testing Report", margin, y);
        y += lineHeight;
        doc.text("Confidential", margin, y);
        y += lineHeight;

        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
        const formattedTime = `${today.getHours().toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")}:${today.getSeconds().toString().padStart(2, "0")}`;

        // Dynamically populate data from reportData
        const details = [
            `Client Name: ${reportData.clientName || "N/A"}`,
            `Report Date: ${reportData.reportDate || "N/A"}`,
            `Test Period: ${reportData.testPeriod || "N/A"}`,
            `Testing Team: ${reportData.testingTeam || "N/A"}`,
            `Prepared By: ${reportData.preparedBy || "N/A"} - ${reportData.classification || "N/A"}`,
        ];

        details.forEach((detail) => addTextWithPageBreak(detail));

        addTextWithPageBreak("");
        addTextWithPageBreak("1. Executive Summary");
        addTextWithPageBreak("1.1 Overview");
        addTextWithPageBreak(reportData.overview || "N/A");

        addTextWithPageBreak("");
        addTextWithPageBreak("1.2 Summary of Findings");
        const findings = [
            `Total Vulnerabilities Identified: ${reportData.totalVulnerabilities || "N/A"}`,
            `Critical Vulnerabilities: ${reportData.criticalVulnerabilities || "N/A"}`,
            `High-Risk Vulnerabilities: ${reportData.highRiskVulnerabilities || "N/A"}`,
            `Medium-Risk Vulnerabilities: ${reportData.mediumRiskVulnerabilities || "N/A"}`,
            `Low-Risk Vulnerabilities: ${reportData.lowRiskVulnerabilities || "N/A"}`,
        ];

        findings.forEach((finding) => addTextWithPageBreak(finding));

        addTextWithPageBreak("");
        addTextWithPageBreak("1.3 Scope of Assessment");
        const scope = [
            `Systems Tested: ${Array.isArray(reportData.systemsTested) ? reportData.systemsTested.join(", ") : "N/A"}`,
            `Testing Methodologies: ${Array.isArray(reportData.testingMethodologies) ? reportData.testingMethodologies.join(", ") : "N/A"}`,
            `Compliance Standards: ${Array.isArray(reportData.complianceStandards) ? reportData.complianceStandards.join(", ") : "N/A"}`,
        ];

        scope.forEach((item) => addTextWithPageBreak(item));

        addTextWithPageBreak("");
        addTextWithPageBreak("3. Findings and Analysis");

        reportData.vulnerabilities.forEach((vuln, index) => {
            addTextWithPageBreak(
                `${index + 1}. Vulnerability: ${vuln.name}, Severity: ${vuln.severity}, CVE: ${vuln.cve || "N/A"}`
            );
            addTextWithPageBreak(`   Recommendation: ${vuln.recommendation}`);
            addTextWithPageBreak(`   Remedy: ${vuln.remedy}`);
            addTextWithPageBreak(`   `);
        });

        doc.save(`PenetrationTestingReport_${formattedDate}_${formattedTime}.pdf`);
    };

    return (
        <Container>
            <h1 className="text-center my-4">Penetration Testing Report</h1>
            <h5><strong>Confidential</strong></h5>
            {/* <Button variant="primary" onClick={generatePDF}>
                Download Penetration Testing Report - PDF
            </Button> */}
             <Button variant="primary" onClick={generatePDF}>
                      Export as PDF
            </Button>
            <hr />
            {[
                { label: "Client Name", value: reportData.clientName },
                { label: "Report Date", value: reportData.reportDate },
                { label: "Test Period", value: reportData.testPeriod },
                { label: "Testing Team", value: reportData.testingTeam },
                { label: "Prepared By", value: `${reportData.preparedBy} - ${reportData.classification}` },
            ].map((item, index) => (
                <p key={index}>
                    <strong>{item.label}:</strong> {item.value || "N/A"}
                </p>
            ))}
            <hr />
            <h2>1. Executive Summary</h2>
            <h4>1.1 Overview</h4>
            <p>{reportData.overview}</p>
            <h4>1.2 Summary of Findings</h4>
            <ul>
                {[
                    { label: "Total Vulnerabilities Identified", value: reportData.totalVulnerabilities },
                    { label: "Critical Vulnerabilities", value: reportData.criticalVulnerabilities },
                    { label: "High-Risk Vulnerabilities", value: reportData.highRiskVulnerabilities },
                    { label: "Medium-Risk Vulnerabilities", value: reportData.mediumRiskVulnerabilities },
                    { label: "Low-Risk Vulnerabilities", value: reportData.lowRiskVulnerabilities },
                ].map((item, index) => (
                    <li key={index}>
                        <strong>{item.label}:</strong> {item.value || "N/A"}
                    </li>
                ))}
            </ul>
            <h4>1.3 Scope of Assessment</h4>
            <ul>
                {[
                    { label: "Systems Tested", value: Array.isArray(reportData.systemsTested) ? reportData.systemsTested.join(", ") : "N/A" },
                    { label: "Testing Methodologies", value: Array.isArray(reportData.testingMethodologies) ? reportData.testingMethodologies.join(", ") : "N/A" },
                    { label: "Compliance Standards", value: Array.isArray(reportData.complianceStandards) ? reportData.complianceStandards.join(", ") : "N/A" },
                ].map((item, index) => (
                    <li key={index}>
                        <strong>{item.label}:</strong> {item.value}
                    </li>
                ))}
            </ul>
            <h2>3. Findings and Analysis</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Vulnerability</th>
                        <th>Severity</th>
                        <th>CVE</th>
                        <th>Recommendation</th>
                        <th>Remedy</th>
                    </tr>
                </thead>
                <tbody>
                    {reportData.vulnerabilities.map((vuln, index) => {
                        let severityColor;
                        switch (vuln.severity.toLowerCase()) {
                            case "critical":
                                severityColor = "red";
                                break;
                            case "high":
                                severityColor = "orange";
                                break;
                            case "medium":
                                severityColor = "yellow";
                                break;
                            case "low":
                                severityColor = "green";
                                break;
                            default:
                                severityColor = "gray";
                        }
                        return (
                            <tr key={index}>
                                <td>{vuln.name}</td>
                                <td style={{ color: severityColor }}>{vuln.severity}</td>
                                <td>{vuln.cve || "N/A"}</td>
                                <td>{vuln.recommendation}</td>
                                <td>{vuln.remedy}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </Container>
    );
};

export default PenetrationTestingReport;
