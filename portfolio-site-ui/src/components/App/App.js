import './App.css';
import React from 'react';
import { render   }  from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
				{/*	This app uses an older react version, so we use switch instead of routes*/}
				<BrowserRouter>
					<Navbar/>
					<Switch>

						<Route path="/about"> <About/></Route>
						<Route path="/contact"> <Contact/></Route>
						<Route path="/resume"><Resume/> </Route>
						<Route path="/school"><School/> </Route>
						<Route path="/"><Home/> </Route>
					</Switch>
					<Footer/>
				</BrowserRouter>
			</div>
		</div>
	)
}

