import gregory from "../../assets/gregory-school.jpg"
import edison from "../../assets/edison-school.png"
import roosevelt from "../../assets/roosevelt-school.jpg"
import highschool2 from "../../assets/westorange-highschool2.png"
import njit from "../../assets/njit.jpg"
import React from 'react';
import Picture from "../Picture/Picture";

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
						<Picture alt={"Gregory Elementary School"} className={"img-fluid"} src={gregory}
						         caption={"Gregory Elementary School"}/>
					</figure>
					<figure>
						<Picture alt={"Edison Middle School"} className={"img-fluid"} src={edison}
						         caption={"Edison Middle School"}/>
					</figure>
					<figure>
						<Picture alt={"Roosevelt Middle School"} className={"img-fluid"} src={roosevelt}
						         caption={"Roosevelt Middle School"}/>
					</figure>
					<figure>
						<Picture alt={"West Orange High School"} className={"img-fluid"} src={highschool2}
						         caption={"West Orange High School"}/>
					</figure>
					<figure>
						<Picture alt={"New Jersey Institute of Technology"} className={"img-fluid"} src={njit}
						         caption={"New Jersey Institute of Technology"}/>
					</figure>
					<br/>
				</div>
				<br/>
				<br/>
			</div>
		</div>
	);
}