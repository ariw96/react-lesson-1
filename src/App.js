// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

function App() {
	return (
		<div className="App">
			<h1>
				<NavBar className="NavBar" />
			</h1>
			<h2>
				<Header />
			</h2>
			<h3>
				<ProfileCard animal="cat" email="ari@gmail.com" />
			</h3>
			<h3>
				<ProfileCard animal="lion" />
			</h3>
			<h3>
				<ProfileCard animal="dog" />
			</h3>
		</div>
	);
}

export default App;
