
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import School from "../School/School";
import Footer from "../Footer/Footer";

export default function App() {
	return (
		<div className="App">
			<div className="container-fluid">
			<BrowserRouter>
				<Navbar/>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/resume" element={<Resume/>}/>
					<Route path="/school" element={<School/>}/>
<Footer/>
			</BrowserRouter>
			</div>
		</div>
	)
}

