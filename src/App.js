import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import GameInfo from "./components/GameInfo/GameInfo";
import ImgSlider from "./components/ImgSlider/ImgSlider";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<GameInfo />
			<ImgSlider />
		</div>
	);
}

export default App;
