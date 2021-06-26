import resume_doc from "../../assets/resume.docx"
import resume from "../../assets/resume.png"
import React from 'react';
export default function Resume() {
	return (
		<div className="Resume">
			<h1 className="text-center text-success">My Resume</h1>
			<figure className="offset-1">
				<img alt="A picture of my resume" className="img-fluid col-10" src={resume}/>
			</figure>
			<p className="text-center"><a className="text-primary" href={resume_doc} target="_blank" download>Link to
				my resume!<br/><br/></a>
			</p>
		</div>
	);
}