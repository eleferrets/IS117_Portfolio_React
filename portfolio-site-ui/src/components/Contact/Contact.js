import React from 'react';
export default function Contact() {
	return (
		<div className="Contact">
			<div>
				<p className="text-center text-warning">Feel free to send me your name, so we can get in contact! <i
					className="fa fa-envelope"/>
				</p>
				<div className="container offset-1">
					<div className="row">
						<form action="">
							<div className="form-group">
								<label htmlFor="firstname">First Name:</label>
								<input className="form-control" id="firstname" name="firstname" placeholder="First name"
								       type="text"/>
							</div>
							<div className="form-group">
								<label htmlFor="lastname">Last Name:</label>
								<input className="form-control" id="lastname" name="lastname" placeholder="Last name"
								       type="text"/>
							</div>
							<button className="btn btn-dark" type="submit">Submit&nbsp;<i
								className="fas fa-badge-check"/>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}