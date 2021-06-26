import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
	return (
		<div className="Navbar">
		<div className="container-fluid">
			<div className="row">
				<nav className="navbar navbar-expand-md justify-content-start bg-dark navbar-dark col-10 offset-1">
					<Link className="navbar-brand" to="/"><i className="fa fa-briefcase"></i></Link>
					<button className="navbar-toggler" data-target="#collapsibleNavbar" data-toggle="collapse"
					        type="button"><span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item"><a className="nav-link" href="html/about.html">About</a>
							</li>
							<li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
							                                     data-toggle="dropdown" href="#"
							                                     id="navbardrop"> Projects </a>
								<div className="dropdown-menu"><a className="dropdown-item"
								                                  href="html/school.html">School</a> <a
									className="dropdown-item" href="html/resume.html">Resume</a>
								</div>
							</li>
							<li className="nav-item"><a className="nav-link" href="html/contact.html">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
		</div>
		)}
