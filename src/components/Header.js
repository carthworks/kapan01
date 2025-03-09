import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header" className="app-header">
			<div className="brand">
				<Link to="/dashboard" className="brand-logo">
					<span className="brand-img">
						<span className="brand-img-text text-theme">C</span>
					</span>
					<span className="brand-text">CybersecAI </span>
					
				</Link>
			</div>
			<div className="menu">
			<div className="menu-item dropdown dropdown-mobile-full">
					
				</div>

			<div className="menu-item dropdown dropdown-mobile-full d-none">
					<a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
						<div className="menu-img online">
							<img src="assets/img/user/profile.jpg" alt="Profile" height="60"/>
						</div>
						<div className="menu-text d-sm-block d-none w-170px"><span className="__cf_email__" data-cfemail="1f6a6c7a6d717e727a5f7e7c7c706a716b317c7072">[email&#160;protected]</span></div>
					</a>
					<div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
						<a className="dropdown-item d-flex align-items-center" href="profile.html">PROFILE <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></a>
						<a className="dropdown-item d-flex align-items-center" href="email_inbox.html">INBOX <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></a>
						<a className="dropdown-item d-flex align-items-center" href="calendar.html">CALENDAR <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></a>
						<a className="dropdown-item d-flex align-items-center" href="settings.html">SETTINGS <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></a>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item d-flex align-items-center" href="page_login.html">LOGOUT <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></a>
					</div>
				</div>
			</div>
		
	</div>
  );
};

export default Header;
