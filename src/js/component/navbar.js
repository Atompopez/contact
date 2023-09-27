import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="d-flex justify-content-end p-3">
			<Link to="/">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</nav>
	);
};
