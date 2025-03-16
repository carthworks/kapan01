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
				<span className="brand-text">CybersecAI</span>
			</Link>
		</div>
		<div className="menu">
			<ul>
				<li><NetworkStatus /></li>
				<li>
					<Link className="logout" to="/logout">
					<span className="bi  bi-logout">Logout</span>	
					</Link>
				</li>
			</ul>
		</div>
	</div>
);
};

export default Header;
