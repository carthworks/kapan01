import React from "react";
import { Link } from "react-router-dom";
import NetworkStatus from "../pages/NetworkStatus"; // Adjust the path as needed


const Header = () => {
const toggleSidebar = () => {
	document.querySelector('.app').classList.toggle('app-sidebar-collapsed');
};

const handleClickOutside = (event) => {
	const appElement = document.querySelector('.app');
	if (appElement && !appElement.contains(event.target)) {
		appElement.classList.remove('app-sidebar-collapsed');
		appElement.classList.remove('app-sidebar-mobile-toggled');
	}
};

document.addEventListener('click', handleClickOutside);

return (
	<div id="header" className="app-header">
	
		<div className="mobile-toggler">
			<button
				type="button"
				className="menu-toggler"
				data-toggle-class="app-sidebar-mobile-toggled"
				data-toggle-target=".app"
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
		</div>
		<div className="mobile-toggler">
			<button
				type="button"
				className="menu-toggler"
				onClick={() => document.querySelector('.app').classList.toggle('app-sidebar-mobile-toggled')}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
		</div>
		<div className="brand">
		<div className="desktop-toggler">
			<button
				type="button"
				className="menu-toggler"
				onClick={toggleSidebar}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
		</div>
			<Link to="/dashboard" className="brand-logo">
				<span className="brand-img">
					<span className="brand-img-text text-theme">C</span>
				</span>
				<span className="brand-text">CybersecAI </span>
			</Link>
			
		</div>
		<div className="menu">
		<NetworkStatus/>
			{/* <div className="menu-item dropdown dropdown-mobile-full"></div>

			<div className="menu-item dropdown dropdown-mobile-full d-none">
				<a
					href="#"
					data-bs-toggle="dropdown"
					data-bs-display="static"
					className="menu-link"
				>
					<div className="menu-img online">
						<img
							src="assets/img/user/profile.jpg"
							alt="Profile"
							height="60"
						/>
					</div>
					<div className="menu-text d-sm-block d-none w-170px"></div>
				</a>
				<div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
					<div className="dropdown-divider"></div>
					<a
						className="dropdown-item d-flex align-items-center"
						href="page_login.html"
					>
						LOGOUT{" "}
						<i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i>
					</a>
				</div>
			</div> */}
		</div>
	</div>
);
};

export default Header;
