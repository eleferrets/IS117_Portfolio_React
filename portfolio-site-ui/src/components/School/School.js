import gregory from "../../assets/gregory-school.jpg"
import edison from "../../assets/edison-school.png"
import roosevelt from "../../assets/roosevelt-school.jpg"
import highschool2 from "../../assets/westorange-highschool2.png"
import njit from "../../assets/njit.jpg"
import React from 'react';
export default function School() {
	return (
		<div className="School">
			<div className="offset-1 col-10">
				<h1 className="text-center text-black-50">My Education</h1>
				<p className="text-center">I have lived my entire life in West Orange, going to school at Gregory
					Elementary School,
					Edison Middle School, Roosevelt Middle School, and West Orange High School.
					I have been fortunate enough to attend the New Jersey Institute of Technology to pursue my degree in
					Computer Science. Below are some pictures of my favorite schools!</p>
				<div className="picture">
					<figure>
						<img alt="Gregory Elementary School" className="img-fluid" src={gregory}/>
						<figcaption>Gregory Elementary School</figcaption>
					</figure>
					<figure>
						<img alt="Edison Middle School" className="img-fluid" src={edison}/>
						<figcaption>Edison Middle School</figcaption>
					</figure>
					<figure>
						<img alt="Roosevelt Middle School" className="img-fluid" src={roosevelt}/>
						<figcaption>Roosevelt Middle School</figcaption>
					</figure>
					<figure>
						<img alt="West Orange High School" className="img-fluid"
						     src={highschool2}/>
						<figcaption>West Orange High School</figcaption>
					</figure>
					<figure>
						<img alt="New Jersey Institute of Technology" className="img-fluid" src={njit}/>
						<figcaption>New Jersey Institute of Technology</figcaption>
					</figure>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</div>
	);
}