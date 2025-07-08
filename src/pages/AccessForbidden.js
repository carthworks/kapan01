import React from "react";
import { Link } from "react-router-dom";
import { Lock, AlertOctagon, ArrowLeft, Shield } from "react-feather";

const AccessForbidden = () => {
  return (
    <div id="app" className="app app-full-height app-without-header">
      <div className="error-page">
        <div className="error-page-content">
          <div className="card mb-5 mx-auto">
            <div className="card-body">
              <div className="card">
                <div className="error-code">403</div>
                <Lock size={60} className="text-warning mb-3" />
                <div className="card-arrow">
                  <div className="card-arrow-top-left"></div>
                  <div className="card-arrow-top-right"></div>
                  <div className="card-arrow-bottom-left"></div>
                  <div className="card-arrow-bottom-right"></div>
                </div>
              </div>
            </div>
            <div className="card-arrow">
              <div className="card-arrow-top-left"></div>
              <div className="card-arrow-top-right"></div>
              <div className="card-arrow-bottom-left"></div>
              <div className="card-arrow-bottom-right"></div>
            </div>
          </div>
          <h1>Access Denied</h1>
          <p className="mb-4">
            You don't have sufficient permissions to access this resource.
            <br />
            This security violation has been logged and reported to the system administrator.
          </p>
          
          <div className="alert alert-warning d-flex align-items-center">
            <AlertOctagon className="me-2" />
            <div>
              <strong>Security Notice:</strong> Multiple unauthorized access attempts may result in account lockout.
            </div>
          </div>
          
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/dashboard" className="btn btn-primary">
              <ArrowLeft className="me-1" size={18} />
              Return to Dashboard
            </Link>
            <Link to="/request-access" className="btn btn-outline-primary">
              <Shield className="me-1" size={18} />
              Request Access
            </Link>
          </div>
          
          <div className="mt-4 text-center text-muted small">
            If you believe this is an error, please contact the security team at security@company.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessForbidden;