import React, {useState  } from "react";
import {  Link, useLocation  } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

   // Reset activeMenu every time the route changes
  //  useEffect(() => {
  //   setActiveMenu(location.pathname);
  // }, [location.pathname]);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    console.log(location); // {pathname: "/dashboard", search: "", hash: "", state: undefined, key: "1v7z7v"}
  };
  return (
    <div id="sidebar" className="app-sidebar">
      <div
        className="app-sidebar-content"
        data-scrollbar="true"
        data-height="100%"
      >
        <div className="menu">
          <div className="menu-header">Navigation</div>
          <div className="menu-item ">
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <span className="menu-icon">
                <i className="bi bi-cpu"></i>
              </span>
              {/* <span className="menu-text">Dashboard</span> */}
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/dashboardmain"
              >
                Home
              </Link>
            </a>
          </div>
          <div className="menu-header"></div>
          <div
            className={`menu-item has-sub dashboard ${
              activeMenu === "/dashboard" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/dashboard"
                onClick={() => handleMenuClick("/dashboard")}
              >
                Dashboard
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/dashboard/overview" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Real-time security insights, alerts)"
                  >
                    📊 Overview
                  </div>
                </Link>

                <Link to="/dashboard/dns-analysis" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Real-time security insights, alerts)"
                  >
                    📊DNS Analysis
                  </div>
                </Link>
                <Link
                  to="/dashboard/threat-intelligence"
                  target="_blank"
                  title="(AI-based risk analysis)"
                  className="menu-link"
                >
                  <div className="menu-text"> 🔍Threat Intelligence </div>
                </Link>
                <Link
                  to="/dashboard/incident-summary"
                  title="(Recent vulnerabilities & attacks)"
                  className="menu-link"
                >
                  <div className="menu-text"> ⚠️ Incident Summary </div>
                </Link>
                <Link
                  to="/dashboard/security-score"
                  title="(System health rating)"
                  className="menu-link"
                >
                  <div className="menu-text"> 🏆 Security Score </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`menu-item has-sub  ${
              activeMenu === "/threat-detection" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/threat-detection"
                onClick={() => handleMenuClick("/threat-detection")}
              >
                Threat Detection & Response
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/vulnerabilityscanner" className="menu-link">
                  <div className="menu-text" title="(Live threat tracking)">
                    Threat Monitoring 🎯
                  </div>
                </Link>
                <Link to="/endpoint-security/devicecontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="(IDS/IPS) (Prevent cyber attacks)"
                  >
                    Intrusion Detection
                  </div>
                </Link>
                <Link to="/networkcontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Predict & prevent breaches)"
                  >
                    AI Threat Prediction
                  </div>
                </Link>
                <Link to="/endpoint-security/deviceinventory" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Automated & manual response)"
                  >
                    Incident Response
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`menu-item has-sub  ${
              activeMenu === "/osapplication-security" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/osapplication-security"
                onClick={() => handleMenuClick("/osapplication-security")}
              >
                OS & Application Security
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu">
              <div className="menu-item">
              

              <Link to="/osapplication-security/appvulner" className="menu-link">
                  <div className="menu-text" title="(Fix recommendations)">
                  Vulnerability App                </div>
                </Link>
                <Link to="/endpoint-security/deviceinventory" className="menu-link">
                  <div className="menu-text" title="(Fix recommendations)">
                    AI-powered Security Advisor
                  </div>
                </Link>

                <Link to="/vulnerabilityscanner" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Check device security risks)"
                  >
                    OS Vulnerability Scanner
                  </div>
                </Link>
                <Link to="/devicecontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="Detect weak configurations)"
                  >
                    Application Hardening
                  </div>
                </Link>
                <Link to="/networkcontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title=" (Auto-update OS & software)"
                  >
                    Patch Management
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`menu-item has-sub  ${
              activeMenu === "/endpoint-security" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/endpoint-security"
                onClick={() => handleMenuClick("/endpoint-security")}
              >
                Endpoint Security
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/endpoint-security/deviceinventory" className="menu-link">
                  <div
                    className="menu-text"
                    title="(List of monitored endpoints)"
                  >
                    Device Inventory
                  </div>
                </Link>

                <Link to="/vulnerabilityscanner" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Check device security risks)"
                  >
                    Vulnerability Scanner
                  </div>
                </Link>
                <Link to="/endpoint-security/devicecontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Restrict/block unauthorized devices)"
                  >
                    Device Control
                  </div>
                </Link>
                <Link to="/networkcontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Monitor & manage device connections)"
                  >
                    Network Control
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`menu-item has-sub  ${
              activeMenu === "/network-security" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/network-security"
                onClick={() => handleMenuClick("/network-security")}
              >
                Network Security & Control
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/network-security/firewall" className="menu-link">
                  <div
                    className="menu-text"
                    title="(List of monitored endpoints)"
                  >
                    Firewall & Traffic Monitoring
                  </div>
                </Link>

                <Link to="/network-security/activity-detection" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Check device security risks)"
                  >
                    Unusual Activity Detection
                  </div>
                </Link>
                <Link to="/network-security/geo-access" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Restrict/block unauthorized devices)"
                  >
                    Geo-based Access Control
                  </div>
                </Link>
                <Link to="/networkcontrol" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Restrict unauthorized access)"
                  >
                    Zero Trust Access
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`menu-item has-sub  ${
              activeMenu === "/reports" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/reports"
                onClick={() => handleMenuClick("/reports")}
              >
                Reports & Analytics
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/reports/security" className="menu-link">
                  <div className="menu-text" title="(Customizable reports)">
                    Security Reports
                  </div>
                </Link>
                <Link to="/reports/compliance" className="menu-link">
                  <div className="menu-text" title="(GDPR, ISO, NIST, etc.)">
                    Compliance Reports
                  </div>
                </Link>
                <Link to="/reports/attack-trends" className="menu-link">
                  <div className="menu-text" title="(Historical insights)">
                    Attack Trend Analysis
                  </div>
                </Link>
                <Link to="/reports/scheduled" className="menu-link">
                  <div className="menu-text" title="(Auto-generated analytics)">
                    Scheduled Reports
                  </div>
                </Link>
                <Link to="/penetration-testing-report" className="menu-link">
                  <div className="menu-text" title="(penetration-testing-report)">
                  Penetration Testing Report
                  </div>
                </Link>

               
              </div>
            </div>
          </div>

          <div
            className={`menu-item has-sub  ${
              activeMenu === "/user-management" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link
                className="menu-text d-flex align-items-center nav-link"
                to="/user-management"
                onClick={() => handleMenuClick("/user-management")}
              >
                User & Role Management
              </Link>
              <span className="menu-caret">
                <b className="caret"></b>
              </span>
            </a>
            <div className="menu-submenu ">
              <div className="menu-item">
                <Link to="/user-access-control" className="menu-link">
                  <div
                    className="menu-text"
                    title="(List of monitored endpoints)"
                  >
                    User Access Control
                  </div>
                </Link>

                <Link to="/multi-tenant-support" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Check device security risks)"
                  >
                    Multi-Tenant Support
                  </div>
                </Link>
                <Link to="/user-role" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Restrict/block unauthorized devices)"
                  >
                    User Roles
                  </div>
                </Link>
                <Link to="/role-based-permissions" className="menu-link">
                  <div
                    className="menu-text"
                    title="(Restrict unauthorized access)"
                  >
                    Role-based Permission
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* <div
            className={`menu-item has-sub  ${
              activeMenu === "/logout" ? "active" : ""
            }`}
          >
            <a href="#" className="menu-link" onClick={(e) => e.preventDefault()}>
              <div className="menu-icon">
                <i className="bi bi-bag-check"></i>
                <span className="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
              </div>
              <Link className="menu-link nav-link text-white" to="/logout">
                <div className="menu-text" title="(Logout)">
                  Logout
                </div>
              </Link>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
