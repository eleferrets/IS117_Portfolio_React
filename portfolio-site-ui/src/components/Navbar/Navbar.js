import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
	return (
		<div className="Navbar">
			<div className="container-fluid">
				<div className="row">
					<nav className="navbar navbar-expand-md justify-content-start bg-dark navbar-dark col-10 offset-1">
						<Link className="navbar-brand" to="/"><i className="fa fa-briefcase"/></Link>
						<button className="navbar-toggler" data-target="#collapsibleNavbar" data-toggle="collapse"
						        type="button"><span className="navbar-toggler-icon"/>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<ul className="navbar-nav">
								<li className="nav-item"><Link className="nav-link" to="/about">About</Link>
								</li>
								<li className="nav-item dropdown"><Link className="nav-link dropdown-toggle"
								                                        data-toggle="dropdown" to="#"
								                                        id="navbardrop"> Projects </Link>
									<div className="dropdown-menu"><Link className="dropdown-item"
									                                     to="/school">School</Link> <Link
										className="dropdown-item" to="/resume">Resume</Link>
									</div>
								</li>
								<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}
