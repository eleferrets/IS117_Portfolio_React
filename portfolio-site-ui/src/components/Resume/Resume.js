import resume_doc from "../../assets/resume.docx"
import resume from "../../assets/resume.png"
import {Link} from "react-router-dom";
export default function Resume() {
	return (
		<div className="Resume">
			<div className="bg-light ">
			<h1 className="text-center text-success">My Resume</h1>
			<figure className="offset-1">
				<img alt="A picture of my resume" className="img-fluid col-10" src={resume}/>
			</figure>
			<p className="text-center"><Link className="text-primary" to={resume_doc} target="_blank">Link to
				my resume!<br/><br/></Link>
			</p>
		</div>
		</div>
	);
}