import "./Header.css";
import HeroImg from "./assets/hero.webp";

const Header = () => {
	return (
		<section id="hero">
			<div className="img-wrapper">
				<img id="hero-img" src={HeroImg} alt="hero-img" />
				<img
					alt="stardew-header"
					id="header-rating"
					src="https://code.nintendo.com/web-components/esrb-rating/assets/en-e10.svg"
				/>
			</div>
		</section>
	);
};

export default Header;
