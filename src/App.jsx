import "./App.scss";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Service from "./components/Service/Service";
import Questions from "./components/Questions/Questions";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<Nav></Nav>
			<Header></Header>
			<About></About>
			<Service></Service>
			<Questions></Questions>
			<Projects></Projects>
			<Contact></Contact>
			<Footer></Footer>
		</div>
	);
}

export default App;
