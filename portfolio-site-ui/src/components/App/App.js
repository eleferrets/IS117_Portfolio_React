
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import School from "../School/School";
import Footer from "../Footer/Footer";
import '../../main.css';

export default function App() {
	return (
		<div className="App">
			<div className="container-fluid">
			<BrowserRouter>
				<Navbar/>
				<Route  path="/" element={<Home />}> </Route>
					<Route  path="/about" element={<About />}> </Route>
					<Route  path="/contact" element={<Contact />}> </Route>
					<Route  path="/resume" element={<Resume />}> </Route>
					<Route  path="/school" element={<School />}> </Route>
<Footer/>
			</BrowserRouter>
			</div>
		</div>
	)
}

