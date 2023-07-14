import "./App.scss";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Service from "./components/Service/Service";
import Questions from "./components/Questions/Questions";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Project from "./pages/Project/Project";
import ScrollToTop from "./utils/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [selectedProject, setSelectedProject] = useState([]);

	const handleSelectProject = (project) => {
		setSelectedProject([project]);
	};

	return (
		<div className="App">
			<Nav></Nav>
			<ScrollToTop></ScrollToTop>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header></Header>
							<About></About>
							<Service></Service>
							<Questions></Questions>
							<Projects handleSelectProject={handleSelectProject}></Projects>
						</>
					}></Route>
				<Route
					path="/project"
					element={
						<Project selectedProject={selectedProject}></Project>
					}></Route>
			</Routes>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
