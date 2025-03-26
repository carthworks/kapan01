import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
<div id="app" class="app app-full-height app-without-header">
		<div className="error-page">
			<div className="error-page-content">
				<div className="card mb-5 mx-auto" >
					<div className="card-body">
						<div className="card">
							<div className="error-code">404</div>
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
				<h1>Oops!</h1> 
				<h3>We can't seem to find the page you're looking for</h3>
				<hr/>
				<p className="mb-1">
					Here are some helpful links instead:
				</p>
				{/* <p className="mb-5">
					<a href="index.html" className="text-decoration-none text-inverse text-opacity-50">Home</a>
					<span className="link-divider"></span>
					<a href="page_search_results.html" className="text-decoration-none text-inverse text-opacity-50">Search</a>
					<span className="link-divider"></span>
					<a href="email_inbox.html" className="text-decoration-none text-inverse text-opacity-50">Email</a>
					<span className="link-divider"></span>
					<a href="calendar.html" className="text-decoration-none text-inverse text-opacity-50">Calendar</a>
					<span className="link-divider"></span>
					<a href="settings.html" className="text-decoration-none text-inverse text-opacity-50">Settings</a>
					<span className="link-divider"></span>
					<a href="helper.html" className="text-decoration-none text-inverse text-opacity-50">Helper</a>
				</p> */}
				<Link to="/login" className="btn btn-outline-theme px-3 rounded-pill"><i className="fa fa-arrow-left me-1 ms-n1"></i> Go Back</Link>
			</div>
		</div>
        </div>
  );
};

export default NotFound;