import memory_game from "../../assets/memory-game.gif"
import {Link} from "react-router-dom";
export default function About() {
	return (
		<div className="About">
			<div className="container-fluid">
				<h1 className="text-center text-info">My Story</h1>
				<figure className="offset-1 float-left">
					<img alt="A picture of a memory game" className="img-fluid col-10" src={memory_game}/>
						<figcaption>A simple Simon memory game I have created.</figcaption>
				</figure>
				<div className="container-fluid pl-5">
					<p className="col-11">I am an American of Haitian-descent with a burning passion for making
						software. I have an older sister and a younger brother, and usually show them the projects that
						I am working on. My parents provided me with the resources that my siblings and I needed to
						succeed in school, such as having access to a computer and having a quiet place to study. As a
						result, throughout my schooling, I have done my best in all my classes in order to show my
						mastery of the material. In addition to maintaining my drive by taking honors and AP classes
						during my high school years and maintaining A’s in my classes, I have also volunteered at my
						local library, by overseeing teen projects and activities. Programming, which allows me to
						create software and learn about how different systems work together seamlessly, will allow me to
						bring a specific experience to each user. As a software developer, I want to be able to make
						applications that make people smile with their friends and family or think differently about the
						world around them. I have even won the Most Improved Orchestra Student award and won 3rd place
						at the pumpkin-throwing trebuchet competition at Picatinny Arsenal. I started programming in
						middle school, fascinated by how people were able to create software that can work so well with
						hardware. I started making games and small programs in C++ and Visual Basic in high school,
						furthering my love for technology and coding.
						<br/>I enjoy fishing, gardening, and web development, with having some experience in Bootstrap
							and React.</p>
					<p className="text-center clearfix">Check out my <a href="https://github.com/eleferrets"
					                                                    target="_blank">GitHub&nbsp;<i
						className="fa fa-thumbs-up"/></a> page for more information about my web development
						projects!
						<br/>You can also check out my <a
							href="https://www.redbubble.com/people/3-Peeps/shop?asc=u&ref=account-nav-dropdown"
							target="_blank">Redbubble&nbsp;<i className="fa fa-thumbs-up"/></a> page to look at some
							great designs made with my siblings!
							<br/>You can even check out my <a href="https://www.linkedin.com/in/brian-balthazar"
							                                 target="_blank">LinkedIn&nbsp;<i
								className="fa fa-thumbs-up"/></a> page to look at my qualifications!
								<br/>Finally, I have a <a href="https://www.youtube.com/channel/UC_28izoaAQ7zpVFpnikiUJw"
								                         target="_blank">YouTube&nbsp;<i
									className="fa fa-thumbs-up"/></a> page where I have unboxing videos for products
									I own. I also have general video game videos in the works, as well!</p>
					<br/>
				</div>
		</div>
		</div>
	);
}