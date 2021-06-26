import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/projects" element={<Projects/>}/>
					<Route path="/resume" element={<Resume/>}/>
					<Route path="/school" element={<School/>}/>
				</Routes>

				{/* <Link to="/"></Link> */}
			</BrowserRouter>
		</div>
	)
}

