import React from "react";
import {  Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="content" className="app-content">
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <div className="card mb-3">
            <div className="card-body">
            <div className="d-flex fw-bold small mb-3">
								<span className="flex-grow-1">SITE VISITORS</span>
								<Link to="#" data-toggle="card-expand" className="text-inverse text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen"></i></Link>
							</div>

              <div className="row align-items-center mb-2">
								<div className="col-7">
									<h3 className="mb-0">4.2m</h3>
								</div>
								<div className="col-5">
									<div className="mt-n2" data-render="apexchart" data-type="bar" data-title="Visitors" data-height="30"></div>
								</div>
							</div>
              <div className="small text-inverse text-opacity-50 text-truncate">
								<i className="fa fa-chevron-up fa-fw me-1"></i> 33.3% more than last week<br/>
								<i className="far fa-user fa-fw me-1"></i> 45.5% new visitors<br/>
								<i className="far fa-times-circle fa-fw me-1"></i> 3.25% bounce rate
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
