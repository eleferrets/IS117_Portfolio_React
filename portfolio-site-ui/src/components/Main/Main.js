import {Link} from "react-router-dom";
import resume_snip from "../../assets/resume-snip.png"
import highschool from "../../assets/westorange-highschool.png"
import React from 'react';

export default function Main() {
	return (
		<div className="Main">

			<div className="jumbotron jumbotron-fluid col-10 offset-1">
				<div className="container">
					<h1 className="display-4 text-center">BJB Portfolio</h1>
				</div>
			</div>
			<div className="card-group">
				<div className="card offset-1 col-4" style={{width: "18rem"}}>
					<img alt="Resume snippet" className="card-img-top img-fluid" src={resume_snip}/>
					<div className="card-body">
						<h5 className="card-title text-danger">Resume</h5>
						<p className="card-text">Click the button below to view my resume and credentials.</p>
						<Link
							className="btn btn-dark" to="/resume">Go!&nbsp;<i className="fa fa-bullseye"/></Link>
					</div>
				</div>
				<div className="card offset-1 col-4 ml-4" style={{width: "18rem"}}>
					<img alt="My high school" className="card-img-top img-fluid" src={highschool}/>
					<div className="card-body">
						<h5 className="card-title text-danger">About Me</h5>
						<p className="card-text">Click the button to learn more about me and my education.</p> <Link
						className="btn btn-dark" to="/school">Go!&nbsp;<i className="fa fa-bullseye"/></Link>
					</div>
				</div>
			</div>
			<div className="offset-1 col-10" style={{marginTop: "30px", color: "#333"}}>
				<p className="text-center">Hi, I'm Brian Balthazar.</p>
				<p className="text-center">I am a sophomore college student at the New Jersey Institute of Technology,
					and a software developer that specializes in <strong>HTML, CSS, JavaScript, and now React</strong>!
					<br/>You can check out more about me by clicking the links above!</p>
				<br/>
				<br/>
			</div>
		</div>
	);
}